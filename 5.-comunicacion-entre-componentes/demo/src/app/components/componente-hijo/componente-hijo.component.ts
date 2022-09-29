import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() estudiantes!: Estudiante[] ;
  @Input() UsuarioActivo!: any;
  @Input() funcionPrueba!: () => void;
 @Output() eventosalida:EventEmitter<string> = new EventEmitter<string>();
 @Output() eventosalidaEstudiante:EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
 nombreEstudiante!: string ;

  constructor() { 
   
  }

  ngOnInit(): void {
    this.funcionPrueba();
  this.eventosalida.emit('este mensaje lo estoy mandando desde el componente hijo');
  }
  agregarEstudiante(){
    let estudiante ={
      nombre:'capo',
      curso: 'java'
    }
    this.eventosalidaEstudiante.emit(estudiante);
  }

}
