import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Pipe({
  name: 'booleanATextoCore'
})
export class BooleanATextoCorePipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    // console.log('Value: ', value);
    // console.log('args: ', args);
    
    // if(value){
    //   return args[0];
    // }else{
    //   return args[1];
    // }
    
    return value ? args[0] : args[1]
  }
}
