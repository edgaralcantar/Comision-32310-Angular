import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../material.module";

import { HomeComponent } from "./components/home/home.component";
import { PaginaNoEncontradaComponent } from "./components/pagina-no-encontrada/pagina-no-encontrada.component";

import { BooleanoEstiloCoreDirective } from './directives/booleano-estilo-core.directive';
import { BooleanATextoCorePipe } from './pipes/boolean-a-texto-core.pipe';
import { FiltroCursosCorePipe } from './pipes/filtro-cursos-core.pipe';
import { RouterModule } from "@angular/router";
import { FormAlumnoComponent } from "../alumnos/components/form-alumno/form-alumno.component";
import { ListaAlumnosComponent } from "../alumnos/components/lista-alumnos/lista-alumnos.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { SidevarComponent } from "./components/sidevar/sidevar.component";
import { CoreRoutingModule } from "./core-routing.module";


@NgModule({
    declarations: [
      HomeComponent,
      PaginaNoEncontradaComponent,
      BooleanoEstiloCoreDirective,
      BooleanATextoCorePipe,
      FiltroCursosCorePipe,
      
      
     
    ],
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule, 
     CoreRoutingModule
    ],
    providers: [
    
    ],
    exports:[
      
    ]
  })

  export class CoreModule{}