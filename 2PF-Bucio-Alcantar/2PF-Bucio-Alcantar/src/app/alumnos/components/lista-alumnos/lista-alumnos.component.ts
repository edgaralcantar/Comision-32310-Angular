import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';

import { BehaviorSubject, filter, from, map, Observable, of, pipe } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  //labelPosition!: boolean;
  
// alumnos: Alumno[] = DatosA.alumnos;
suscripcion: any;
alumno!: Alumno[];
filtro: string = '';
dataSource$: Observable<Alumno[]> ;
  columnas: string[] = ['nombre', 'edad', 'telefono', 'correo',/*'curso','profesor','fechaInicio', 'fechaFin', 'inscripcionAbierta',*/ 'status','acciones']
  //dataSource: MatTableDataSource<Observable<Alumno[]>> = new MatTableDataSource<Observable<Alumno[]>>(this.alumnos);
 // dataSource = new UserDataSource(this.alumnosService);

  constructor(private router: Router, private alumnosService: AlumnosService,) {
   
  
    this.dataSource$ = alumnosService.obtenerAlumnos();
  
   }
 
  ngOnInit(): void {
  }

  filtrarNombre(event: Event){
 /*   const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSourse.filterPredicate = function(alumno: Alumno, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();*/
   
    
    this.dataSource$ = this.alumnosService.obtenerAlumnos().pipe(
      map((alumnos: Alumno[]) => alumnos.filter((alumnos: Alumno) => alumnos.nombre.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()) 
      || alumnos.apellidos.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
      /*|| 
      
      curso.comision.includes(this.filtro) 
      ||
      curso.fechaInicio.getMonth() + 1 == parseInt(this.filtro)*/))
     
     )
  }
  filtrarstatus(event: string){
    
 /*   this.dataSource.filterPredicate = function(alumno: Alumno){
      console.log(alumno.status, alumno.nombre, event);
      return alumno.status;
    };
    this.dataSource.filter = event.valueOf(); */
  }
  editar(alumno: Alumno){
    this.router.navigate(['editar-alumno', alumno])
   
  }
  agregarAlumno(){
    this.router.navigate(['form-alumno']);
  }
  eliminar(id: number){
    this.alumnosService.eliminarAlumno(id);
    this.dataSource$ = this.alumnosService.obtenerAlumnos();
  }

}

