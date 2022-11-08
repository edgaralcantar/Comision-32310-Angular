import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';
import { of } from 'rxjs';

describe('CursosService', () => {
  let service: CursosService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });
/////////////////////
it('El servicio retorna un arreglo de usuarios mockeados', (done: DoneFn) => {
  const mockDatos = [
    
      {
       "nombre": "mobile",
       "comision": "71146-1406",
       "profesor": "Margie",
       "fechaInicio": "2022-06-26T16:31:21.549Z",
       "fechaFin": "2023-03-25T16:55:50.116Z",
       "inscripcionAbierta": true,
       "imagen": "http://loremflickr.com/640/480",
       "descripcion": "Ut voluptatem cumque necessitatibus veritatis ut.\nRerum voluptatibus laborum perferendis molestiae quia facere.",
       "id": "2"
      },
     /* {
       "nombre": "digital",
       "comision": "30359",
       "profesor": "Margret",
       "fechaInicio": "2022-08-13T06:54:18.034Z",
       "fechaFin": "2023-09-06T20:34:38.245Z",
       "inscripcionAbierta": true,
       "imagen": "http://loremflickr.com/640/480",
       "descripcion": "Ratione dolore temporibus.\nMinima sit possimus non voluptatem eligendi aliquid qui ipsam expedita.\nEst nisi qui quas quis quae rem explicabo.\nEt itaque in eligendi sit.",
       "id": "3"
      },
      {
       "nombre": "neural",
       "comision": "75223",
       "profesor": "Scarlett",
       "fechaInicio": "2022-02-01T10:38:20.913Z",
       "fechaFin": "2022-12-19T04:24:46.562Z",
       "inscripcionAbierta": false,
       "imagen": "http://loremflickr.com/640/480",
       "descripcion": "Suscipit consequatur animi beatae labore cum sunt inventore.",
       "id": "4"
      },*/
      {
       "nombre": "virtual",
       "comision": "92487-3359",
       "profesor": "Josiane",
       "fechaInicio": "2022-02-05T02:40:39.940Z",
       "fechaFin": "2023-07-06T03:20:55.580Z",
       "inscripcionAbierta": true,
       "imagen": "http://loremflickr.com/640/480",
       "descripcion": "Aperiam consectetur voluptas id voluptates explicabo consequatur dolorum dolor.\nDolore impedit qui.",
       "id": "5"
      }
     
  ];

  httpClientSpy.get.and.returnValue(of(mockDatos));

  service.obtenerCursosObservable().subscribe((cursos) => {
    
   // expect(cursos).toEqual(mockDatos);
    done();
  })
})


///////////////
});
