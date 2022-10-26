import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosCursosService {

  
  cursos: Curso[] = [
    { 
      id: 1,
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Keven',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 2,
      nombre: 'Angular',
      comision: '32320',
      profesor: 'Fernando',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 3, 30),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 3,
      nombre: 'ReactJS',
      comision: '33310',
      profesor: 'Arturo',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 4,
      nombre: 'VueJS',
      comision: '34310',
      profesor: 'Lautaro',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 6, 30),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
  ];
  cursos$: Observable<Curso[]>;
 private cursosSubject: BehaviorSubject<Curso[]>;
 
constructor() { 
  this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  this.cursos$ = new Observable<Curso[]>((suscriptor) => {
    suscriptor.next(this.cursos)})

}

obtenerCursosPromise(): Promise<Curso[] | any>{
  return new Promise((resolve, reject) => {
    if(this.cursos.length > 0){
      resolve(this.cursos);
    }else{
      reject({
        codigo: 0,
        mensaje: 'No hay cursos disponibles en este momento'
      });
    }
  });
}
obtenerCursosObservable(){
 
  return this.cursosSubject.asObservable();
 
}
agregarCurso(curso: Curso){
  this.cursos.push(curso);
  this.cursosSubject.next(this.cursos);
}
eliminarCurso(id: number){
  let indice = this.cursos.findIndex((c: Curso) => c.id === id);

  if(indice > -1){
    this.cursos.splice(indice, 1);
  }

  this.cursosSubject.next(this.cursos);
}
editarCurso(curso: Curso){
  let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

  if(indice > -1){
    this.cursos[indice] = curso;
  }

  this.cursosSubject.next(this.cursos);
}
}
