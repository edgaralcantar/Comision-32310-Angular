import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { DatosA } from 'src/app/data/alumnos';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  //labelPosition!: boolean;
  alumnos: Alumno[] = DatosA.alumnos;
  columnas: string[] = ['nombre', 'edad', 'telefono', 'correo','curso','profesor','fechaInicio', 'fechaFin', 'inscripcionAbierta', 'status','acciones']
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  constructor() { }
 
  ngOnInit(): void {
  }

  filtrarNombre(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(alumno: Alumno, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
  filtrarstatus(event: string){
    
    this.dataSource.filterPredicate = function(alumno: Alumno){
      console.log(alumno.status, alumno.nombre, event);
      return alumno.status;
    };
    this.dataSource.filter = event.valueOf(); 
  }
  editar(){
    console.log(this.alumnos);
  }

}
