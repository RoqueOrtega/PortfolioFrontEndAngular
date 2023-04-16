import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url="http://localhost:8080/api/habilidades";

  constructor(private http:HttpClient) { }

  public lista():Observable<any>{
    return this.http.get<any>(this.url);
  }

  public delete(id: number):Observable<any>{
    //return this.http.delete<any>(this.url +'/'+id);
    return this.http.delete<any>(this.url+`/${id}`);
  }

  
  public save(habilidad: Habilidad):Observable<any>{
    return this.http.post<any>(this.url,habilidad);
  }
  
  public detail(id: number):Observable<any>{
    return this.http.get<any>(this.url+`/${id}`);
  }

  public update(habilidad: any):Observable<any>{
    return this.http.put<any>(this.url,habilidad);
  }

}
