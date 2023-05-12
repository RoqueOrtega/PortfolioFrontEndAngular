import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticationService:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser = this.autenticationService.UsuarioAutenticado;

    if (currentUser && currentUser.jwtToken)
    {
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.jwtToken}`
        }
      })
    }
    console.log("Interceptor está corriendo "+JSON.stringify(currentUser))
    return next.handle(req);

  }
}
