import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioRectivoComponent } from './components/formulario-rectivo/formulario-rectivo.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRectivoComponent,
    FormularioTemplateComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
