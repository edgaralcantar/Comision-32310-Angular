import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {
 
  curso$!: Observable<Curso[]>;
  suscripcion: any
  curso!: Curso;

  constructor(
    private activateRouter: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
    ) { }
   /* ngOnDestroy(){
      //this.suscripcion.unsubscribe();
     
    }*/
  
  ngOnInit(): void {
   
    this.activateRouter.paramMap.subscribe((parametros) => {
    // let id = parseInt(parametros.get('id') || '0');
     console.log("detalle ", parametros);
     // this.curso$ = this.cursoService.obtenerCurso(id)


   
      
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
    })
 
  }

}
