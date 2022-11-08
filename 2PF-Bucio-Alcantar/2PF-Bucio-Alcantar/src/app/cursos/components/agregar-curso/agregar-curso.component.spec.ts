import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCursoComponent } from './agregar-curso.component';

describe('AgregarCursoComponent', () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  ////////////////////////////////////////

  it('El formulario se mantiene invalido cuando no esta lleno por completo los campos', () => {
    const formulario = component.formularioCurso;
   // const comision = formulario.controls['comision'];

   // comision.setValue('32350');

    expect(formulario.valid).toBeFalse();
  })

  it('El formulario se mantiene valido cuando ingreso todos los campos', () => {
    const formulario = component.formularioCurso;
  //  const nombre = formulario.controls['nombre'];

  //  nombre.setValue('Angular');

    expect(formulario.valid).toBeTrue();
  })

});
