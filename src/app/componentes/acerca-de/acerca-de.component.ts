import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  //Variable para usarla(enlazarla) al template(en el html de la vista)
  persona:any;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerDatosPersonales().subscribe(data =>{
      //console.log("*****En acerca-de.component.ts*****")
      //console.log(data);
      this.persona = data;
    });
  }

}
