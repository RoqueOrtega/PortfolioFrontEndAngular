import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { HabilidadEdicionComponent } from './modales/habilidad-edicion/habilidad-edicion.component';

const routes: Routes = [
  { path: '', component:IndexComponent },  
  { path: 'login', component:LoginComponent },
  { path: 'editHabilidad/:id', component:HabilidadEdicionComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
