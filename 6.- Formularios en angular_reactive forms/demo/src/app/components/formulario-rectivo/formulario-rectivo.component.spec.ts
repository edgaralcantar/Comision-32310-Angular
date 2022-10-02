import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRectivoComponent } from './formulario-rectivo.component';

describe('FormularioRectivoComponent', () => {
  let component: FormularioRectivoComponent;
  let fixture: ComponentFixture<FormularioRectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
