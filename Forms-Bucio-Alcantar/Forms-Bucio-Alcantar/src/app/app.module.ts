import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
     {path: '', component:HomeComponent},
      {path: 'form', component:FormComponent},
      {path: 'home/:dato', component:HomeComponent},
     /* {path: 'home/:apellido', component:HomeComponent},
      {path: 'home/:correo', component:HomeComponent},
      {path: 'home/:telefono', component:HomeComponent},
      {path: 'home/:edad', component:HomeComponent},*/
     {path: '**', component:HomeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
