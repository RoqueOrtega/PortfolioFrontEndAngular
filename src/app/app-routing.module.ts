import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { HabilidadEdicionComponent } from './modales/habilidad-edicion/habilidad-edicion.component';
import { BannerEdicionComponent } from './modales/banner-edicion/banner-edicion.component';
import { AcercaDeEdicionComponent } from './modales/acerca-de-edicion/acerca-de-edicion.component';

const routes: Routes = [
  { path: '', component:IndexComponent },  
  { path: 'login', component:LoginComponent },
  { path: 'editHabilidad/:id', component:HabilidadEdicionComponent },
  { path: 'editBanner/:id', component:BannerEdicionComponent },
  { path: 'editAcercaDe/:id', component:AcercaDeEdicionComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
