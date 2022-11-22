import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaIncripcionesComponent } from './components/lista-incripciones/lista-incripciones.component';

const routes: Routes = [
  { path: '', children: [
    { path: 'lista-incripciones', component: ListaIncripcionesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
