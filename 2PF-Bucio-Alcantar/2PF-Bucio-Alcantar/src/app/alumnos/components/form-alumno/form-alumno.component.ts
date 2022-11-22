import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Alumno } from 'src/app/models/alumno';
import { Usuario } from 'src/app/models/usuario';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {
 
  
  formularioUsuario: FormGroup;
  
  contrasenasIguales!: boolean;
  constructor( 
    private fb: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    private alumnosService: AlumnosService,
    ) {
    this.formularioUsuario = fb.group(
      {
        nombre: new FormControl('',[Validators.required]),
        apellido: new FormControl('',[Validators.required]),
        edad: new FormControl('',[Validators.required ]),
        telefono: new FormControl('',[Validators.required]),
        correo:  new FormControl('',[ Validators.required, Validators.pattern('^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$')]),
        contrasena:  new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
        contrasena2:  new FormControl('',[Validators.required, Validators.minLength(5)]),
        
      }
    );
   }

  ngOnInit(): void {
  }
  agregarUsuario(){
    const contrasena1 = this.formularioUsuario.value.contrasena;
    const contrasena2 = this.formularioUsuario.value.contrasena2;
    this.contrasenasIguales = contrasena1 === contrasena2;
    let c: Alumno = {
      id: 3,
      nombre: this.formularioUsuario.value.nombre,
      apellidos: this.formularioUsuario.value.apellido,
      edad: this.formularioUsuario.value.edad,
      telefono: this.formularioUsuario.value.telefono,
      correo: this.formularioUsuario.value.correo,
      status: true,
     
    } 
    this.alumnosService.agregarAlumno(c);
    
    let us: Usuario ={
      id: 0,
      usuario: this.formularioUsuario.value.correo,
      contrasena: this.formularioUsuario.value.contrasena,
     admin: false,
     //sesionActiva: false
    }
  console.log('persona', this.formularioUsuario.value.nombre);
   this.alumnosService.agregarUsuario(us)
  
    this.router.navigate(['home'])
  }
}


