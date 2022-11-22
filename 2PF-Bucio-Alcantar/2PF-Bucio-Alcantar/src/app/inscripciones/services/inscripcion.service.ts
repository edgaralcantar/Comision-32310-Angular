import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.apiC}/inscripciones`);
  }

  agregarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.post<Inscripcion>(`${environment.apiC}/inscripciones`, inscripcion);
  }

  editarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.put<Inscripcion>(`${environment.apiC}/inscripciones/${inscripcion.id}`, inscripcion);
  }

  eliminarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.delete<Inscripcion>(`${environment.apiC}/inscripciones/${inscripcion.id}`);
  }
}
