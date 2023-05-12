import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PersonaService } from 'src/app/servicios/persona.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalHabilidadAddComponent } from './modales/modal-habilidad-add/modal-habilidad-add.component';
import { HabilidadEdicionComponent } from './modales/habilidad-edicion/habilidad-edicion.component';
import { BannerEdicionComponent } from './modales/banner-edicion/banner-edicion.component';
import { AcercaDeEdicionComponent } from './modales/acerca-de-edicion/acerca-de-edicion.component';
import { InterceptorService } from './servicios/interceptor.service';
import { HabilidadService } from './servicios/habilidad.service';
import { AutenticacionService } from './servicios/autenticacion.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
    ModalHabilidadAddComponent,
    HabilidadEdicionComponent,
    BannerEdicionComponent,
    AcercaDeEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ PersonaService, HabilidadService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
