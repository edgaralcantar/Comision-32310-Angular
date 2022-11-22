import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { loadSesionActiva } from '../../core/state/sesion.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup
 // usuarios!: Observable<Usuario[]>;
  constructor(
    private sesionService: SesionService,
    private router: Router,
    private store: Store<Sesion>,
  ) {
   //  this.usuarios=this.sesionService.obtenerRol();
    this.formulario = new FormGroup({
      usuario: new FormControl('ed@hd.com'),
      contrasena: new FormControl('cHdXR7ey7FBJdRH'),
      admin: new FormControl(true)
    })
   }

  ngOnInit(): void {
    
  }
  login(){
    let u: Usuario = {
      id: 0,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    // sesionActiva: true
    }
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesionActiva({usuarioActivo: usuario}));
    });
 
    this.router.navigate(["home"]);
  }


  Registrarse(){
    this.router.navigate(['form-alumno']);
  }
}

  /*login(){
   let nomUs = this.usuarios.pipe(
    map((usuario: Usuario[]) => usuario.filter((usuario: Usuario) => usuario.usuario.includes(this.formulario.value.usuario)
    &&  usuario.admin.valueOf() === true 
    )
    
     
    ));
    console.log("login: " + nomUs);
   
   
    console.log(this.formulario.value);
    this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena, this.formulario.value.admin);
    this.router.navigate(['home']);

  }*/
  



