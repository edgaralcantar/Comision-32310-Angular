import { TestBed } from '@angular/core/testing';

import { CursosCursosService } from './cursos-cursos.service';

describe('CursosCursosService', () => {
  let service: CursosCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
