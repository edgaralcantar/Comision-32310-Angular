import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective implements OnInit{
 
  

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
   
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', 'black');
    
   
   
  
  }

}
