import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //url="http://localhost:8080/api/datos-personales";
  url= environment.apiURL + "api/datos-personales";

  constructor(private http:HttpClient) { }

  obtenerDatosPersonales():Observable<any>{
    //console.log("El servicio persona está corriendo!")
    //return this.http.get('./assets/data/data.json');
    return this.http.get<any>(this.url);
  }

  public detail(id: number):Observable<any>{
    return this.http.get<any>(this.url+`/${id}`);
  }

  public update(persona: any):Observable<any>{
    return this.http.put<any>(this.url,persona);
  }

}
