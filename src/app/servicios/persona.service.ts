import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url="http://localhost:8080/api/datos-personales";

  constructor(private http:HttpClient) { }

  obtenerDatosPersonales():Observable<any>{
    //console.log("El servicio persona está corriendo!")
    //return this.http.get('./assets/data/data.json');
    return this.http.get<any>(this.url);

  }
}
