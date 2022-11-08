import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup
  usuarios!: Observable<Usuario[]>;
  constructor(
    private sesionService: SesionService,
    private router: Router
  
  ) {
     this.usuarios=this.sesionService.obtenerRol();
    this.formulario = new FormGroup({
      usuario: new FormControl('Abner'),
      contrasena: new FormControl('asd.123'),
      admin: new FormControl(true)
    })
   }

  ngOnInit(): void {
    
  }
  login(){
   let nomUs = this.usuarios.pipe(
    map((usuario: Usuario[]) => usuario.filter((usuario: Usuario) => usuario.usuario.includes(this.formulario.value.usuario)
    &&  usuario.admin.valueOf() === true 
    )
    
     
    ));
    console.log("login: " + nomUs);
   
   
    console.log(this.formulario.value);
    this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena, this.formulario.value.admin);
    this.router.navigate(['home']);

  }
  Registrarse(){
    this.router.navigate(['form-alumno']);
  }
}
