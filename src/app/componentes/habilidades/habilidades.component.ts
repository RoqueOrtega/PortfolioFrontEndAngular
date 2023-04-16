import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  //Variable para usarla(enlazarla) al template(en el html de la vista)
  habilidades: any[]=[];
  constructor(private habilidadService:HabilidadService) { }

  ngOnInit(): void {
    this.cargarHilidades();
  }

  cargarHilidades():void{
    this.habilidadService.lista().subscribe(data =>{
      this.habilidades = data;
    });
  }

  borrar(id:number){
    if (id != undefined){
      this.habilidadService.delete(id).subscribe(
        data =>{
          //alert("Halidad eliminada!!!");
          this.cargarHilidades();
        }, err =>{
          //alert("No se pudo eliminar la habilidad!")
          window.location.reload();
        })
    }}


}
