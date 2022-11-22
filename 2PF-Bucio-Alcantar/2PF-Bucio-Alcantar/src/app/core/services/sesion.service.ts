import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Alumno } from 'src/app/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor( private http: HttpClient) {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }
  login(usuario: Usuario): Observable<Usuario>{
   
    return this.http.get<Usuario[]>(`${environment.apiC}/usuario`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((u: Usuario) => u.usuario === usuario.usuario && u.contrasena===usuario.contrasena)[0]
      
      }));
      
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }
 /* login(usuario: string, contrasena: string, admin: boolean){
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        usuario: usuario,
        contrasena: contrasena,
        admin: admin,
        sesionActiva: true,
      }
    }

    this.sesionSubject.next(sesion);
  }*/
 
  /*obtenerRol(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.apiC}/usuario}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }*/
 /* CerrarSecion() Observable<Sesion>{

  }

 editarCurso(curso: Curso){
    this.http.put<Curso>(`${environment.apiC}/cursos/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro Actualizado"); 
  }*/


  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}