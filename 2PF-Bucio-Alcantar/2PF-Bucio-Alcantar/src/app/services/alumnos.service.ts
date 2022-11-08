import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, map, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor( private http: HttpClient) { }

  obtenerAlumnos(): Observable<Alumno[]>{
   
    return this.http.get<Alumno[]>(`${environment.apiC}/alumno`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
   
  }

  obtenerAlumno(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(`${environment.apiC}/alumno/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarAlumno(alumno: Alumno){
    this.http.post(`${environment.apiC}/alumno/`, alumno, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  agregarUsuario(usuario: Usuario){
    this.http.post(`${environment.apiC}/usuario/`, usuario, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editarAlumno(alumno: Alumno){
    this.http.put<Alumno>(`${environment.apiC}/alumno/${alumno.id}`, alumno).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro Actualizado"); 
  }

  eliminarAlumno(id: number){
    this.http.delete<Alumno>(`${environment.apiC}/alumno/${id}`).pipe(
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
