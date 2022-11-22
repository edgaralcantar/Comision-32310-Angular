import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material.module';


import { FooterComponent } from './core/components/footer/footer.component';
import { SidevarComponent } from './core/components/sidevar/sidevar.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { CoreModule } from './core/core.module';
import { CursosModule } from './cursos/cursos.module';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { cursosFeatureKey, reducer } from './cursos/state/cursos.reducer';
import { AlumnosModule } from './alumnos/alumnos.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesModule } from './inscripciones/inscripciones.module';





@NgModule({
  declarations: [
    AppComponent,
   SidevarComponent,
   FooterComponent,
   ToolbarComponent,
  
    

  ],
  imports: [
    InscripcionesModule,
    AlumnosModule,
    CoreModule,
   CursosModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
     StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
     EffectsModule.forRoot([])


   /* RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule )
    },
      {path: 'toolbar', component: ToolbarComponent},
      {path: 'lista-alumnos', component: ListaAlumnosComponent},
      {path: 'lista-cursos', component: ListaCursosComponent},
   //   {path: 'editar-curso', component: EditarCursoComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'pagina-no-encontrada-c', component: PaginaNoEncontradaCComponent},
     {path: 'form-alumno', component: FormAlumnoComponent},
   //  {path: ':id', component: DetalleCursoComponent},
      {path: '**',component: HomeComponent}

    
        ]),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
