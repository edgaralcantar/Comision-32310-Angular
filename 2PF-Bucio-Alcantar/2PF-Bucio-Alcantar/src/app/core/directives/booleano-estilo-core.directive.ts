import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanoEstiloCore]'
})
export class BooleanoEstiloCoreDirective implements OnInit {
  @Input('appBooleanoEstiloCore') inscripcionAbierta!: boolean;
  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) 
  { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'padding', '0px 10px 0px 10px');
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '40px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', '#FFFFFF');
    this.renderer.setStyle(
      this.elemento.nativeElement, 
      'background-color', 
      this.inscripcionAbierta ? 'green' : 'red'
    );
  }

}
