import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';


@Component({
  selector: 'app-modal-habilidad-add',
  templateUrl: './modal-habilidad-add.component.html',
  styleUrls: ['./modal-habilidad-add.component.css']
})
export class ModalHabilidadAddComponent implements OnInit {
  form: FormGroup;
  nombre = '';
  porcentaje = 0;
  constructor(private formBuilder:FormBuilder, private habilidadService:HabilidadService) {
    //Se crea el grupo de controles para el formulario
    this.form = formBuilder.group(
      {
        nombre:['',[Validators.required]],
        porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]]
      }
    )
  }
  

  ngOnInit(): void {
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
  
  
  //Validaciones
  get NombreValid()
  {
    return this.Nombre?.touched && !this.Nombre.valid;
  } 

  get PorcentajeValid()
  {
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }  


  onCreate(event:Event): void{
    const habi = new Habilidad(this.nombre,this.porcentaje);
    this.habilidadService.save(habi).subscribe(data=>{
      //alert("Habilidad añadida!");
      window.location.reload();
    }, err => {
      alert("Falló el guardado de la habilidad!");
      this.form.reset();
    })
  }

  limpiar(): void{
    this.form.reset();
  }  

}
