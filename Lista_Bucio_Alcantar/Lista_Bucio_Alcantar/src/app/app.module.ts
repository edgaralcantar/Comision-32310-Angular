import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    NavbarComponent,
    FooterComponent
   
  ],
  imports: [
   
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:DirectivaComponent},
      {path: '**', component:DirectivaComponent},
      {path: 'directiva', component:DirectivaComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
