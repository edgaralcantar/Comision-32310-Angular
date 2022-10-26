import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
    { path: 'lista-alumnos', component: ListaAlumnosComponent, children: [
     /* { path: 'listar', component: ListaCursosComponent },
      { path: 'editar', component: EditarCursoComponent },*/
      { path: 'form-alumno', component: FormAlumnoComponent }
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlumnosRoutingModule { }