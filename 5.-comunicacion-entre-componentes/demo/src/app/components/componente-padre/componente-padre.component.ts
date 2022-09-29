import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit, AfterViewInit {
 
 @Input() estudiantesPadre!: Estudiante[];
 @ViewChild(ComponenteHijoComponent) componenteHijo!: ComponenteHijoComponent;
 mensajeSalida: string = '';

  constructor() { 
    console.log('llamando desde el constructor', this.componenteHijo);  
  }

  ngOnInit(): void {
    console.log('llamando desde el ngonInit',this.componenteHijo);  
  }

  ngAfterViewInit(): void {
    console.log('llamando desde el gdAfterViewInit',this.componenteHijo);  
    //this.componenteHijo.UsuarioActivo = {nombre: 'pepe'}
  }

funcionPrueba(){
  alert("Hola mundo!");
}
manejarEventoSalida(mensaje: string){
this.mensajeSalida =mensaje; 
}
agregarEstudiante(estudiante: Estudiante){
  estudiante.nombre = this.componenteHijo.nombreEstudiante;
  this.estudiantesPadre.push(estudiante);
}
}
