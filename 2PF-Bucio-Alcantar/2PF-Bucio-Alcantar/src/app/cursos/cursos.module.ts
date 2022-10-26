import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../material.module";

import { FormCursoComponent } from "./components/form-curso/form-curso.component";
import { ListaCursosComponent } from "./components/lista-cursos/lista-cursos.component";

import { BooleanoEstiloCursosDirective } from './directives/booleano-estilo-cursos.directive';
import { PaginaNoEncontradaCComponent } from './components/pagina-no-encontrada-c/pagina-no-encontrada-c.component';
import { BooleanATextoCursosPipe } from './pipes/boolean-a-texto-cursos.pipe';
import { FiltroCursosCursosPipe } from './pipes/filtro-cursos-cursos.pipe';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { CursosRoutingModule } from "./cursos-routing";
import { CursosService } from "../services/cursos.service";
import { matDatepickerAnimations, MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";


@NgModule({
    declarations: [
      FormCursoComponent,
      ListaCursosComponent,
     PaginaNoEncontradaCComponent,
     

     
      BooleanoEstiloCursosDirective,
      PaginaNoEncontradaCComponent,
      BooleanATextoCursosPipe,
      FiltroCursosCursosPipe,
      EditarCursoComponent,
      CursosInicioComponent,
     
    ],
    imports: [
     // BrowserAnimationsModule,
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule,
    CursosRoutingModule,
   // MatSlideToggleModule
  
      
    ],
    providers: [
    CursosService
    ],
    exports:[
      
    ]
  })

  export class CursosModule{}