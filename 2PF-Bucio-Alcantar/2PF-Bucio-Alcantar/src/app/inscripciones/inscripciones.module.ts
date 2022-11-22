import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaIncripcionesComponent } from './components/lista-incripciones/lista-incripciones.component';

import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ListaIncripcionesComponent,
    EditarDialogComponent
  ],
  imports: [
    CommonModule,
  
    InscripcionesRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripcionesModule { }
