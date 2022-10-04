import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
   dato ='';
   lista: Array<Usuario>=[
    {nombre: 'Jorge', apellidos: 'Bucio Alcantar',edad: '23',telefono: '7861231234',correo:'jorge123qgmail.com'},
    {nombre: 'Edgar', apellidos: 'Garia Lopez',edad: '23',telefono: '7861234321',correo:'edgar123qgmail.com'},
    {nombre: 'Josue', apellidos: 'Perez Perez',edad: '23',telefono: '7861231234',correo:'josue123qgmail.com'}
  
  ];
  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
 this.dato = this.route.snapshot.paramMap.get('dato')!;

  }
  Actualizar(){
    let toArray =  this.dato.split('/');
    
    this.lista.push({nombre: toArray[0],apellidos: toArray[1],edad: toArray[2],telefono: toArray[3],correo: toArray[4]} );
      
  }
 
}


