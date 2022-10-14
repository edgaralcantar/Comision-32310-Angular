import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoService } from './services/curso.service';
import { CursosComponent } from './components/cursos/cursos.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CursoAlphaService } from './services/curso-alpha.service';
import { EstudianteService } from './services/estudiante.service';
import { cursos } from './services/curso.data';
import { environment } from 'src/environments/environment';
import { config, token } from './config';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
