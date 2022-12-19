import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './Administrador/Administrador.component';
import { PeliculasComponent } from './Peliculas/Peliculas.component';
import {AccionesComponent} from "./acciones/acciones.component";
import {ValidacionComponent} from "./validacion/validacion.component";
import {EditarComponent} from "./editar/editar.component";

const routes: Routes = [
  {path:'', component:PeliculasComponent},
  {path:'admin', component:AdministradorComponent},
  {path:'admin/agregar',component:AccionesComponent},
  {path:'editar/:id',component:EditarComponent},
  {path:'validacion',component:ValidacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
