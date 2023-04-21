import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //url="http://localhost:8080/api/login";
  url= environment.apiURL + "api/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
      console.log("El servicio de autenticación está corriendo");
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }


  iniciarSesion(credenciales:any):Observable<any>
  {
    console.log("*****En autenticacion.service.ts.iniciarSesion()*****");
    //Se realiza la llamada a la API y realizan algunas cosas con los datos devueltos
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));
  }


  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }

}
