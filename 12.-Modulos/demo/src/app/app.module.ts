import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CursosModule } from './cursos/cursos.module';
import { CoreModule } from './core/core.module';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
   
    BrowserModule,
    CoreModule,
    AutenticacionModule,
    CursosModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }