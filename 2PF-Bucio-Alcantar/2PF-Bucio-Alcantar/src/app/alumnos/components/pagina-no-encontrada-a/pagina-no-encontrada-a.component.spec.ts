import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoEncontradaAComponent } from './pagina-no-encontrada-a.component';

describe('PaginaNoEncontradaAComponent', () => {
  let component: PaginaNoEncontradaAComponent;
  let fixture: ComponentFixture<PaginaNoEncontradaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNoEncontradaAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNoEncontradaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
