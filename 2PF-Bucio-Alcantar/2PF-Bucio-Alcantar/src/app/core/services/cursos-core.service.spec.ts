import { TestBed } from '@angular/core/testing';

import { CursosCoreService } from './cursos-core.service';

describe('CursosCoreService', () => {
  let service: CursosCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
