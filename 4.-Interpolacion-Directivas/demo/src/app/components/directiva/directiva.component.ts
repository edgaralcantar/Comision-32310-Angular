import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
nombre!: string;
variable1: number = 10;
variable2: number = 5;
usuarioActivo: Persona = {
  nombre: 'Laura',
  edad: 26
}
listaNombres: Array<string> = ['abner','edgar','pablo','mario','jose']
ListaNombres: Array<Persona> = [
  {nombre: 'Abner',edad: 26 },
  {nombre: 'Edgar',edad: 25 },
  {nombre: 'Mario',edad: 24 },
  {nombre: 'Juan',edad: 23 },
  {nombre: 'Luis',edad: 22 }
];

fecha: Date = new Date();
//listaNombres: string[];
  constructor() { }

  ngOnInit(): void {
  }

  manejarEvento(){
    this.variable1 = Math.round(Math.random() * 10);
  }

}
