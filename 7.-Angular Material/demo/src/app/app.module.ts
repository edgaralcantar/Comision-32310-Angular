import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemplosAngularMaterialComponent } from './components/ejemplos-angular-material/ejemplos-angular-material.component';

import { DemoTablaComponent } from './components/demo-tabla/demo-tabla.component';
import { MateriaModule } from './materia.module';
import { DialogComponent } from './components/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    EjemplosAngularMaterialComponent,
    DemoTablaComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MateriaModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
