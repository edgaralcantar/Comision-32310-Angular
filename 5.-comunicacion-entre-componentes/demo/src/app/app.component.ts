import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes = [
    {nombre: 'agustin', curso: 'angular'},
    {nombre: 'abner', curso: 'angular'},
    {nombre: 'jorge', curso: 'angular'},
    {nombre: 'ijak', curso: 'angular'}
  ];
}
