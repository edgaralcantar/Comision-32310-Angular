import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../material.module";


import { ListaAlumnosComponent } from "./components/lista-alumnos/lista-alumnos.component";
import { FormAlumnoComponent } from "./components/form-alumno/form-alumno.component";

import { PaginaNoEncontradaAComponent } from "./components/pagina-no-encontrada-a/pagina-no-encontrada-a.component";
import { BooleandoEstiloAlumnosDirective } from './directives/booleando-estilo-alumnos.directive';
import { BooleanATextoAlumnosPipe } from "./pipes/boolean-a-texto-alumnos.pipe";
import { RouterModule } from "@angular/router";
import { AlumnosRoutingModule } from "./alumnos-routing.module";


@NgModule({
    declarations: [
      FormAlumnoComponent,
      ListaAlumnosComponent,
     PaginaNoEncontradaAComponent,
     BooleandoEstiloAlumnosDirective,
     BooleanATextoAlumnosPipe,
     

    
     
  
    
     
    ],
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule,
      AlumnosRoutingModule
      
  
      
    ],
    providers: [
     // SesionService
    ],
    exports:[
      
    ]
  })

  export class AlumnosModule{}