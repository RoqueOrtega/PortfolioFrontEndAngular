import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  //Variable para usarla(enlazarla) al template(en el html de la vista)
  persona:any;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerDatosPersonales().subscribe(data =>{
      //console.log("*****En banner.component.ts*****")
      //console.log(data);
      this.persona = data;
    });
  }

}
