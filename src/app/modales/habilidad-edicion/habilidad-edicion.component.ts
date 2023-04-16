import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidad-edicion',
  templateUrl: './habilidad-edicion.component.html',
  styleUrls: ['./habilidad-edicion.component.css']
})
export class HabilidadEdicionComponent implements OnInit {
  form: FormGroup;
  habilidad:Habilidad=new Habilidad('',0);//No deja asignar null
  constructor(private formBuilder:FormBuilder, 
              private habilidadService:HabilidadService,
              private activatedRoute:ActivatedRoute,
              private ruta:Router) { 
    //Se crea el grupo de controles para el formulario
    this.form = formBuilder.group(
      {
        id:[''],
        nombre:['',[Validators.required]],
        porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]]
      }
    )
  }

  ngOnInit(): void {
    //Se obtiene el ID recibido como parametro
    const id = this.activatedRoute.snapshot.params['id'];
    //Se obtiene la habilidad desde el service, este invoca a una api del back-end
    this.habilidadService.detail(id).subscribe(data =>{
      this.habilidad = data;
    });    
  }


   //Para las validaciones
   get Nombre()
   {
     return this.form.get('nombre');
   }
 
   get Porcentaje()
   {
     return this.form.get('porcentaje');
   } 



   onUpdate(event:Event): void{
    event.preventDefault;
    this.habilidadService.update(this.form.value).subscribe(data=>{
      //alert("Habilidad modificada!!!!");
      this.ruta.navigate(['']);
    }, err => {
      alert("Falló la modifiación de la habilidad!");
    })
  }


}
