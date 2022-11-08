import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, from, map, Observable, of, pipe } from 'rxjs';

import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  filtro: string = '';
  //cursos: Curso[] = DatosC.cursos;
  cursos!: Curso[]; 
  promesa: any;
  cursos$: Observable<Curso[]>;
  suscripcion: any
  

  constructor(
    //private cursoService: CursosCursosService,
        private cursoService: CursosService,
        private router: Router
        ) {
  //  this.promesa = cursoService.obtenerCursosPromise()
    
    this.suscripcion = cursoService.obtenerCursosObservable().subscribe({
      next: (cursos: Curso[]) => {
        this.cursos = cursos;
         console.log('Desde el observable12', cursos);
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.cursos$ = cursoService.obtenerCursosObservable();
    console.log('Desde el observable-lista', this.cursos$);
  }
 
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    
    
    
   
   
  }
  agregarCurso(){
    this.router.navigate(['form-curso']);
  }
  filtroCurso(){
     console.log(this.filtro);
    
    this.cursos$ = this.cursoService.obtenerCursosObservable().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.nombre.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()) /*|| 
      curso.comision.includes(this.filtro) ||
      curso.fechaInicio.getMonth() + 1 == parseInt(this.filtro)*/))
     
     )
  }
  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
    this.cursos$ = this.cursoService.obtenerCursosObservable();
  }
  editarCurso(curso: Curso){
    console.log(curso);
    this.router.navigate(['editar-curso', curso],/*{skipLocationChange: true }*/ );
  }
  verCurso(curso: Curso){
    console.log("se va a mandar "+curso);
    this.router.navigate(['detalle-curso/', curso], /*{skipLocationChange: true }*/);
  }
}
