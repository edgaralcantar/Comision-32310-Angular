import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoEncontradaCComponent } from './pagina-no-encontrada-c.component';

describe('PaginaNoEncontradaCComponent', () => {
  let component: PaginaNoEncontradaCComponent;
  let fixture: ComponentFixture<PaginaNoEncontradaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNoEncontradaCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNoEncontradaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
