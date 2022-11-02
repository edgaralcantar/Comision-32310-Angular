import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCursoComponent } from '../cursos/components/detalle-curso/detalle-curso.component';


//import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';


import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
  
 
    {path: ':id', component: DetalleCursoComponent }
 //   { path: 'agregar', component: AgregarCursoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }