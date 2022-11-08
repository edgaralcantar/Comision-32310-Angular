import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { AdminGuard } from '../../guards/admin.guard';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.css']
})
export class SidevarComponent implements OnInit {
  mobileQuery: MediaQueryList;
  sesion$!: Observable<Sesion>;
 
 // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
fillerNav = [
  {name:'Home',route:"home",icon:'home'},
  {name:'Autenticacion',route:"autenticacion",icon:'library_books'},
  {name:'Cursos',route:"lista-cursos",icon:'library_books'},
 // {name:'editar',route:"editar-curso",icon:'library_books'},
  {name:'Alumnos',route:"lista-alumnos",icon:'list_alt'},
  {name:'Registra Alumno',route:"form-alumno",icon:'person_add'},
  {name:'Mis cursos',route:"mis-cursos",icon:'list_alt', },
  
]
  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );
 
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private sesionService: SesionService
    ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.sesion$ = this.sesionService.obtenerSesion();
  }
  shouldRun = true;
}
