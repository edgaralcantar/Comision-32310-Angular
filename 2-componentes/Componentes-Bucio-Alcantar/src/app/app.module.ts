import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiguenosComponent } from './components/siguenos/siguenos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SiguenosComponent,
    ServiciosComponent,
    FooterComponent,
    ToolbarComponent,
    ConocenosComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
       {path: 'home', component:HomeComponent},
      {path: 'servicios', component:ServiciosComponent},
      {path: 'siguenos', component:SiguenosComponent},
      {path: 'conocenos', component:ConocenosComponent},
      {path: 'ayuda', component:AyudaComponent},
      {path: '**', redirectTo:'/',pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
