import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';



@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  curso!: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService,
   
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros)
      this.curso ={
      id : parseInt(parametros.get('id') || '0'),
      nombre:parametros.get('nombre')  || '',
        comision: parametros.get('comision') || '',
        profesor: parametros.get('profesor') || '',
        fechaInicio: new Date( parametros.get('fechaInicio') || ''),
        fechaFin: new Date( parametros.get('fechaFin') || ''),
        inscripcionAbierta:parametros.get('inscripcionAbierta') === 'true',
        imagen : parametros.get('imagen') || '',
        descripcion : parametros.get('descripcion') || ''
     
    }
     
      this.formulario = new FormGroup({
        nombre: new FormControl(this.curso.nombre, [Validators.required]),
        comision: new FormControl(this.curso.comision),
        profesor: new FormControl(this.curso.profesor),
        inicio: new FormControl(this.curso.fechaInicio),
        fin: new FormControl(this.curso.fechaFin),
        inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
        imagen: new FormControl(this.curso.imagen),
        descripcion: new FormControl(this.curso.descripcion)
      });
    })
  }

  editarCurso() {
    let c: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen:this.curso.imagen,
      descripcion: this.curso.descripcion
    }

    this.cursoService.editarCurso(c);

    this.router.navigate(['lista-cursos'])
  }

}
