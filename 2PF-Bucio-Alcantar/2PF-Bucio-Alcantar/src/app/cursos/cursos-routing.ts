import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
//import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';

import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  {path: 'inicio', component: CursosInicioComponent, children: [
   { path: 'lista', component: ListaCursosComponent },
    {path: 'editar-curso', component: EditarCursoComponent }
 //   { path: 'agregar', component: AgregarCursoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }