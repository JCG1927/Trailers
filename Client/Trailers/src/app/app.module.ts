import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './Peliculas/Peliculas.component';
import { AdministradorComponent } from './Administrador/Administrador.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AccionesComponent } from './acciones/acciones.component';
import { ValidacionComponent } from './validacion/validacion.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
      PeliculasComponent,
      AdministradorComponent,
      AccionesComponent,
      ValidacionComponent,
      EditarComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
