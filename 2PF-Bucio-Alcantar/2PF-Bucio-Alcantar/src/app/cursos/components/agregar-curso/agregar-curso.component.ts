import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
 
  curso!: Curso;
  formularioCurso!: FormGroup;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private cursoService: CursosService,  
      private fb: FormBuilder,
      private router: Router, 
      private route: ActivatedRoute) {
      this.formularioCurso = fb.group(
        {
          nombre: new FormControl('',[Validators.required]),
          comision: new FormControl('',[Validators.required]),
          profesor: new FormControl('',[Validators.required]),
          inicio: new FormControl('',[Validators.required]),
          fin: new FormControl('',[Validators.required]),
          inscripcionAbierta: new FormControl('',[Validators.required]),
          imagen: new FormControl('',[Validators.required]),
          descripcion: new FormControl('',[Validators.required])


        
        }
      );
  }

  ngOnInit(): void {
  }
 /* agregarCurso(){

    

     this.router.navigate(['lista-cursos',this.formularioCurso.value.nombre +'/'+ this.formularioCurso.value.comision +'/'
 + this.formularioCurso.value.profesor + '/'+this.formularioCurso.value.inicio +'/'+ this.formularioCurso.value.fin+'/'
 + this.formularioCurso.value.inscripcionAbierta+ '/'
 + this.formularioCurso.value.imagen+'/'+ this.formularioCurso.value.descripcion]);
  

  }*/
  agregarCurso(){
    let curso: Curso = {
      id:5,
      nombre:this.formularioCurso.value.nombre,
      comision: this.formularioCurso.value.comision,
      profesor: this.formularioCurso.value.profesor,
      fechaInicio:this.formularioCurso.value.inicio,
      fechaFin: this.formularioCurso.value.fin,
      inscripcionAbierta: this.formularioCurso.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
      descripcion:this.formularioCurso.value.descripcion
     }
    this.cursoService.agregarCurso(curso);
    this.router.navigate(['lista-cursos']);
  }
}
