import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component:IndexComponent },  
  { path: 'login', component:LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
