import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/components/home/home.component';

import { ListaAlumnosComponent } from './alumnos/components/lista-alumnos/lista-alumnos.component';

import { TitulosDirective } from './directives/titulos.directive';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';

import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAlumnoComponent } from './alumnos/components/form-alumno/form-alumno.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidevarComponent } from './core/components/sidevar/sidevar.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { CoreModule } from './core/core.module';
import { CursosModule } from './cursos/cursos.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';

import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { PaginaNoEncontradaCComponent } from './cursos/components/pagina-no-encontrada-c/pagina-no-encontrada-c.component';
import { EditarCursoComponent } from './cursos/components/editar-curso/editar-curso.component';



@NgModule({
  declarations: [
    AppComponent,
   SidevarComponent,
   FooterComponent,
   ToolbarComponent,
  
    

  ],
  imports: [
    
    CoreModule,
   
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'toolbar', component: ToolbarComponent},
      {path: 'lista-alumnos', component: ListaAlumnosComponent},
      {path: 'lista-cursos', component: ListaCursosComponent},
      {path: 'editar-curso', component: EditarCursoComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'pagina-no-encontrada-c', component: PaginaNoEncontradaCComponent},
     {path: 'form-alumno', component: FormAlumnoComponent},
      {path: '**',component: HomeComponent}
    
        ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
