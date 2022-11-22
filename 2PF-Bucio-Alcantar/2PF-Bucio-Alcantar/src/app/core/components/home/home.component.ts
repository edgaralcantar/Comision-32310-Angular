import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter, from, map, Observable, of, pipe } from 'rxjs';
import { loadCursosSuccess, loadCursosFailure } from 'src/app/cursos/state/cursos.actions';
import { selectStateCursos, selectStateCargando } from 'src/app/cursos/state/cursos.selectors';

import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso.state';
import { CursosService } from 'src/app/services/cursos.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cargando$!: Observable<boolean>;
  filtro: string = '';
  //cursos: Curso[] = DatosC.cursos;
  cursos!: Curso[]; 
  promesa: any;
  cursos$: Observable<Curso[]>;
  suscripcion: any
  

  constructor(    
    private cursoService: CursosService,
    private router: Router,
    private store: Store<CursoState>
    ) {
  //  this.promesa = cursoService.obtenerCursosPromise()
  this.cursos$ = this.store.select(selectStateCursos); 
  this.cargando$ = this.store.select(selectStateCargando);

  
  }
 
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    
    this.suscripcion = this.cursoService.obtenerCursosObservable().subscribe({
      next: (cursos: Curso[]) => {
        this.store.dispatch(loadCursosSuccess({cursos}));
      },
      error: (error: any) => {
        alert("Hubo un error")
        this.store.dispatch(loadCursosFailure(error));
      }
    });
    
   
   
  }

  filtroCurso(){
     console.log(this.filtro);
    this.cursos$ = this.cursoService.obtenerCursosObservable().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.nombre.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()) || 
      curso.comision.includes(this.filtro) ||
      curso.fechaInicio.getMonth() + 1 == parseInt(this.filtro)))
     
     )
  }

  verCurso(curso: Curso){
    console.log("se va a mandar "+curso);
    this.router.navigate(['detalle-curso/', curso], /*{skipLocationChange: true }*/);
  }
}
