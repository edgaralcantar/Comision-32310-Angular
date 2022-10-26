import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Pipe({
  name: 'filtroCursosCore'
})
export class FiltroCursosCorePipe implements PipeTransform {

  transform(cursos: Curso[], filtro: string): Curso[] {
    return cursos.filter(
      curso => curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()) || 
      curso.comision.includes(filtro) ||
      curso.fechaInicio.getMonth() + 1 == parseInt(filtro)
    );
  }

}
