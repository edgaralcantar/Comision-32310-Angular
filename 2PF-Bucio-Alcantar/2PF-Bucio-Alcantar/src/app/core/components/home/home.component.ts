import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, from, map, Observable, of, pipe } from 'rxjs';

import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { CursosCoreService } from '../../services/cursos-core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filtro: string = '';
  //cursos: Curso[] = DatosC.cursos;
  cursos!: Curso[]; 
  promesa: any;
  cursos$: Observable<Curso[]>;
  suscripcion: any
  

  constructor(    private cursoService: CursosCoreService) {
  //  this.promesa = cursoService.obtenerCursosPromise()
    
    this.suscripcion = cursoService.obtenerCursosObservable().subscribe({
      next: (cursos: Curso[]) => {
        this.cursos = cursos;
         console.log('Desde el observable', cursos);
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.cursos$ = cursoService.obtenerCursosObservable();
  }
 
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    
    
    
   
   
  }
  agregarCurso(){
    let curso: Curso = {
      id:5,
      nombre: 'Kotlin',
      comision: '34310',
      profesor: 'Mario',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 6, 30),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
     }
    this.cursoService.agregarCurso(curso);
  }
  filtroCurso(){
     console.log(this.filtro);
    this.cursos$ = this.cursoService.obtenerCursosObservable().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.nombre.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()) || 
      curso.comision.includes(this.filtro) ||
      curso.fechaInicio.getMonth() + 1 == parseInt(this.filtro)))
     
     )
  }

  VerCurso(){
    
  }
}
