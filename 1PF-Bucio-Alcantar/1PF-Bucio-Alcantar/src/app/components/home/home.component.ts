import { Component, OnInit } from '@angular/core';
import { DatosC } from 'src/app/data/curso';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filtro: string = '';
  cursos: Curso[] = DatosC.cursos;
  constructor() { }

  ngOnInit(): void {
  }

}
