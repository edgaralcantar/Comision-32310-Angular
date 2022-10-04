import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formularioUsuario: FormGroup;
  
  contrasenasIguales!: boolean;
 
  constructor(
     private fb: FormBuilder,private router: Router, private route: ActivatedRoute
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
console.log( this.formularioUsuario.value);
this.router.navigate(['/home',this.formularioUsuario.value.nombre +'/'+ this.formularioUsuario.value.apellido +'/'
 + this.formularioUsuario.value.edad + '/'+this.formularioUsuario.value.telefono +'/'+ this.formularioUsuario.value.correo]);


    

 
  }

}
