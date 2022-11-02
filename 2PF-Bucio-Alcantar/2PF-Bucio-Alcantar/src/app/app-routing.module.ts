import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAlumnoComponent } from './alumnos/components/form-alumno/form-alumno.component';
import { ListaAlumnosComponent } from './alumnos/components/lista-alumnos/lista-alumnos.component';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { LoginComponent } from './autenticacion/login/login.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './core/components/home/home.component';

import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { AgregarCursoComponent } from './cursos/components/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './cursos/components/detalle-curso/detalle-curso.component';
import { EditarCursoComponent } from './cursos/components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { PaginaNoEncontradaCComponent } from './cursos/components/pagina-no-encontrada-c/pagina-no-encontrada-c.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'autenticacion', component: LoginComponent},

    {path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule )
  },
    {path: 'toolbar', component: ToolbarComponent},
    {path: 'lista-alumnos', component: ListaAlumnosComponent, canActivate: [AutenticacionGuard]},
    {path: 'lista-cursos', component: ListaCursosComponent},
    {path: 'editar-curso', component: EditarCursoComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'pagina-no-encontrada-c', component: PaginaNoEncontradaCComponent},
   {path: 'form-alumno', component: FormAlumnoComponent, canActivate: [ AdminGuard]},
   {path: 'form-curso', component: AgregarCursoComponent},
   {path: ':id', component: DetalleCursoComponent},
    {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{  useHash: true, })],
  exports: [RouterModule]
})
export class AppRoutingModule { }