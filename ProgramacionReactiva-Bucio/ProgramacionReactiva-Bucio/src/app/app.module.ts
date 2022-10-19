import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SidevarComponent } from './components/sidevar/sidevar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitulosDirective } from './directives/titulos.directive';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';

import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidevarComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    FooterComponent,
    TitulosDirective,
    BooleanATextoPipe,
    FiltroCursosPipe,
    BooleanoEstiloDirective,
    FormAlumnoComponent,
    

  ],
  imports: [
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
  {path: 'footer', component: FooterComponent},
  {path: 'form-alumno', component: FormAlumnoComponent},
  {path: '**',component: HomeComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
