import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/models/Alumnos';


@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  
listaAlumnos: Array<Alumnos> = [
  {nombre: 'Jorge', apellidos: 'Perez Perez',grupo: 'A1', grado: 1, promedio: 8},
  {nombre: 'Edgar', apellidos: 'Garcia Matinez',grupo: 'A5', grado: 5, promedio: 5},
  {nombre: 'Armando', apellidos: 'Guillen Luz',grupo: 'A4', grado: 4, promedio: 9},
  {nombre: 'Mario', apellidos: 'Lopez Lopez',grupo: 'A6', grado: 6, promedio: 10},
  {nombre: 'Maria', apellidos: 'Alvarez Gonzales',grupo: 'A1', grado: 1, promedio: 8},
  {nombre: 'Andrea', apellidos: 'Correa Alcantar',grupo: 'A2', grado: 2, promedio: 10},
  {nombre: 'Brisa', apellidos: 'Gomez Correa',grupo: 'A3', grado: 3, promedio: 7},
  {nombre: 'Fernanda', apellidos: 'Suarez Guijosa',grupo: 'A2', grado: 2, promedio: 4},
  {nombre: 'Karla', apellidos: 'Duran Carmona',grupo: 'A4', grado: 4, promedio: 6},
  {nombre: 'Cecilia', apellidos: 'Perez Maldonado',grupo: 'A6', grado: 6, promedio: 2},
  {nombre: 'Jorge Edgar', apellidos: 'Bucio Alcantar',grupo: 'A6', grado: 6, promedio: 9}
 ];

  ngOnInit(): void {
  }

}
