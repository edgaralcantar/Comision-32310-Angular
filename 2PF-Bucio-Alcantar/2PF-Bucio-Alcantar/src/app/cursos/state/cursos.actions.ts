import { createAction, props } from '@ngrx/store';
import { Curso } from '../../models/curso';


export const loadCursos = createAction(
  '[Cursos] Load Cursoss'
);

export const loadCursosSuccess = createAction(
  '[Cursos] Load Cursoss Success',
  props<{ cursos: Curso[] }>()
);

export const loadCursosFailure = createAction(
  '[Cursos] Load Cursoss Failure',
  props<{ error: any }>()
);
