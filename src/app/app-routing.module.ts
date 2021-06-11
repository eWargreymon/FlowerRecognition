import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FloresComponent } from './components/flores/flores.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { CamaraComponent } from './components/camara/camara.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/home'},
  { path:'home', component:FormularioComponent},
  { path:'predict', component:PrediccionComponent},
  { path:'about', component:InformacionComponent},
  { path:'flowers', component:FloresComponent},
  { path:'agregar', component:AgregarComponent},
  { path:'camara', component:CamaraComponent},
  { path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
