import { Alumno } from "../models/alumno";

export class DatosA{
    static alumnos: Alumno[] = [
      {
        id:'1',
        nombre: 'Jorge',
       apellidos:'Bucio Alcantar',
       edad: '23',
       telefono: '7861134812',
       correo: 'jorge@gmail.com',
     /*  curso: 'Angular',
       profesor: 'Keven',
       fechaInicio: new Date(2022, 0, 1),
       fechaFin: new Date(2022, 1, 28),*/
       status: false,
     //  inscripcionAbierta: true,
      },
      {
        id:'1',
        nombre: 'Edgar',
       apellidos:'Alcantar Bucio',
       edad: '30',
       telefono: '7861134123',
       correo: 'edgar@gmail.com',
     /*  curso: 'Java',
       profesor: 'Fernando',
       fechaInicio: new Date(2022, 2, 1),
       fechaFin: new Date(2022, 3, 30),*/
       status: true,
     //  inscripcionAbierta: true,
       
      },
      {
        id:'1',
        nombre: 'Mario',
       apellidos:'Lopez Hernandez',
       edad: '20',
       telefono: '7861134321',
       correo: 'mario@gmail.com',
      /* curso: 'Kotlin',
       profesor: 'Arturo',
       fechaInicio: new Date(2022, 1, 1),
       fechaFin: new Date(2022, 3, 28),*/
       status: true,
     //  inscripcionAbierta: false,
      },
      {
        id:'1',
        nombre: 'Maria',
       apellidos:'Hernandez Lopez',
       edad: '18',
       telefono: '7861454812',
       correo: 'maria@gmail.com',
      /* curso: 'Angular',
       profesor: 'Lautaro',
       fechaInicio: new Date(2022, 5, 1),
       fechaFin: new Date(2022, 6, 30),*/
       status: true,
    //   inscripcionAbierta: false,
      },
      {
        id:'1',
        nombre: 'Juan',
       apellidos:'Garcia Garcia',
       edad: '21',
       telefono: '7861131233',
       correo: 'juan@gmail.com',
     /*  curso: 'ReactJS',
       profesor: 'Keven',
       fechaInicio: new Date(2022, 0, 1),
       fechaFin: new Date(2022, 1, 28),*/
       status: false,
     //  inscripcionAbierta: true,

      },
    ]
    }