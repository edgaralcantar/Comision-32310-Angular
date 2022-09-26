import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { DirectivaPerzonalizadaDirective } from './directives/directiva-perzonalizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    DirectivaPerzonalizadaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
