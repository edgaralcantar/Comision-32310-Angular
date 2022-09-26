import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPerzonalizada]'
})
export class DirectivaPerzonalizadaDirective {

  constructor(
private renderer: Renderer2,
private elementRef:ElementRef

  ) { 
renderer.setStyle(elementRef.nativeElement, 'background-color', '#d1d1d1');

  }

}
