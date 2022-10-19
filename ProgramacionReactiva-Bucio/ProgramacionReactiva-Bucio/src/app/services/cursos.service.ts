import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, map } from 'rxjs';
import { Curso } from '../models/curso';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[] = [
      {
        nombre: 'Angular',
        comision: '32310',
        profesor: 'Keven',
        fechaInicio: new Date(2022, 0, 1),
        fechaFin: new Date(2022, 1, 28),
        inscripcionAbierta: true,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
      },
      {
        nombre: 'Angular',
        comision: '32320',
        profesor: 'Fernando',
        fechaInicio: new Date(2022, 2, 1),
        fechaFin: new Date(2022, 3, 30),
        inscripcionAbierta: true,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
      },
      {
        nombre: 'ReactJS',
        comision: '33310',
        profesor: 'Arturo',
        fechaInicio: new Date(2022, 1, 1),
        fechaFin: new Date(2022, 3, 28),
        inscripcionAbierta: false,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
      },
      {
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
    cursosSubject: BehaviorSubject<Curso[]>;

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

}
