import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner-edicion',
  templateUrl: './banner-edicion.component.html',
  styleUrls: ['./banner-edicion.component.css']
})
export class BannerEdicionComponent implements OnInit {
  form: FormGroup;
  persona:Persona=new Persona('','','','','','');//No deja asignar null
  constructor(private formBuilder:FormBuilder,
              private personaService:PersonaService,
              private activatedRoute:ActivatedRoute,
              private ruta:Router) { 
    //Se crea el grupo de controles para el formulario
    this.form = formBuilder.group(
      {
        id:[''],
        acercade:[''],
        nombre:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        telefono:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]]
      }
    )
  }

  ngOnInit(): void {
    //Se obtiene el ID recibido como parametro
    const id = this.activatedRoute.snapshot.params['id'];
    //Se obtiene la persona desde el service, este invoca a una api del back-end
    this.personaService.detail(id).subscribe(data =>{
      this.persona = data;
    });   
  }

  //Para las validaciones
  get Nombre()
  {
    return this.form.get('nombre');
  }

  get Descripcion()
  {
    return this.form.get('descripcion');
  }

  get Telefono()
  {
    return this.form.get('telefono');
  }

  get Email()
  {
    return this.form.get('email');
  }


  onUpdate(event:Event): void{
    event.preventDefault;
    this.personaService.update(this.form.value).subscribe(data=>{
      //alert("Banner modificado!!!!");
      this.ruta.navigate(['']);
    }, err => {
      alert("Falló la modifiación del banner!");
    })
  }  

}
