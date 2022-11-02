import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, map, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  /*cursos: Curso[] = [
      {
        id:1,
        nombre: 'Angular',
        comision: '32310',
        profesor: 'Keven',
        fechaInicio: new Date(2022, 0, 1),
        fechaFin: new Date(2022, 1, 28),
        inscripcionAbierta: true,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
      },
      {
        id:2,
        nombre: 'Angular',
        comision: '32320',
        profesor: 'Fernando',
        fechaInicio: new Date(2022, 2, 1),
        fechaFin: new Date(2022, 3, 30),
        inscripcionAbierta: true,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
      },
      {
        id:3,
        nombre: 'ReactJS',
        comision: '33310',
        profesor: 'Arturo',
        fechaInicio: new Date(2022, 1, 1),
        fechaFin: new Date(2022, 3, 28),
        inscripcionAbierta: false,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
      },
      {
        id:4,
        nombre: 'VueJS',
        comision: '34310',
        profesor: 'Lautaro',
        fechaInicio: new Date(2022, 5, 1),
        fechaFin: new Date(2022, 6, 30),
        inscripcionAbierta: false,
        imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
      },
    ];*/
   // cursos$: Observable<Curso[]>;
   // cursosSubject: BehaviorSubject<Curso[]>;

  constructor(   private http: HttpClient) { 
 
  //  this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  //  this.cursos$ = new Observable<Curso[]>((suscriptor) => {
 //     suscriptor.next(this.cursos)})

  }

  /*este no obtenerCursosPromise(): Promise<Curso[] | any>{
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
  }este no*/
 /* obtenerCursosObservable(){
   
    return this.cursosSubject.asObservable();
   
  }
  obtenerCurso(id: number): Observable<Curso>{
    return this.obtenerCursosObservable().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id)[0])
    )
  }
  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }
  editarCurso(curso: Curso){
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

    if(indice > -1){
      this.cursos[indice] = curso;
    }

    this.cursosSubject.next(this.cursos);
  }
  eliminarCurso(id: number){
    let indice = this.cursos.findIndex((c: Curso) => c.id === id);
  
    if(indice > -1){
      this.cursos.splice(indice, 1);
    }
  
    this.cursosSubject.next(this.cursos);
  }*/

  obtenerCursosObservable(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.apiC}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${environment.apiC}/cursos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarCurso(curso: Curso){
    this.http.post(`${environment.apiC}/cursos/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editarCurso(curso: Curso){
    this.http.put<Curso>(`${environment.apiC}/cursos/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro Actualizado"); 
  }

  eliminarCurso(id: number){
    this.http.delete<Curso>(`${environment.apiC}/cursos/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro eliminado");  
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
