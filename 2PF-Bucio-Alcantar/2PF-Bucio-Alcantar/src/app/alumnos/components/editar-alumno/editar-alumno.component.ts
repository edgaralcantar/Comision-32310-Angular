import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  formularioUsuario!: FormGroup;
  alumno!: Alumno;
  contrasenasIguales!: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
   
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros)
      this.alumno ={
      id : parametros.get('id') || '0',
      nombre:parametros.get('nombre')  || '',
      apellidos:parametros.get('apellidos')  || '', 
      edad: parametros.get('edad') || '',
      telefono: parametros.get('telefono') || '',
      correo: parametros.get('correo') || '',   
      status:parametros.get('status') === 'true',
      
     
    }
     
      this.formularioUsuario = new FormGroup({
        nombre: new FormControl(this.alumno.nombre, [Validators.required]),
        apellidos: new FormControl(this.alumno.apellidos),
        edad: new FormControl(this.alumno.edad),
        telefono: new FormControl(this.alumno.telefono),
        correo: new FormControl(this.alumno.correo),
        status: new FormControl(this.alumno.status),
       
      });
    })
  
}
actualizarUsuario(){
  let c: Alumno = {
    id: this.alumno.id,
    nombre: this.formularioUsuario.value.nombre,
    apellidos: this.formularioUsuario.value.apellidos,
    edad: this.formularioUsuario.value.edad,
    telefono: this.formularioUsuario.value.telefono,
    correo: this.formularioUsuario.value.correo,
    status: this.formularioUsuario.value.status,
   
  }

  this.alumnosService.editarAlumno(c);

  this.router.navigate(['lista-alumnos'])

}



}
