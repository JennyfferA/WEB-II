import {
  Aspirante,
  Cursos,
  DetallesInscripcion,
  Inscripcion,
} from "./interfaces";

export const cursos: Cursos[] = [
  {
    ID: 1,
    Descripcion: "Primer Alumno",
    Fecha_Inicio: new Date("01/01/2024"),
  },
  {
    ID: 2,
    Descripcion: "Segundo Alumno",
    Fecha_Inicio: new Date("03/02/2024"),
  },
  {
    ID: 3,
    Descripcion: "Tercero Alumno",
    Fecha_Inicio: new Date("05/05/2024"),
  },
  {
    ID: 4,
    Descripcion: "Cuarto Alumno",
    Fecha_Inicio: new Date("05/05/2024"),
  },
  {
    ID: 5,
    Descripcion: "Quinto Alumno",
    Fecha_Inicio: new Date("05/05/2024"),
  },
];

export const aspirantes: Aspirante[] = [
  {
    ID: 1,
    Nombre: "Lucas MIguel Suarez",
    Identificacion: "0751243580",
  },
  {
    ID: 2,
    Nombre: "Anthonio Francisco Gudiño",
    Identificacion: "0859736552",
  },
  {
    ID: 3,
    Nombre: "Miguel Angel Sanchez",
    Identificacion: "1275846935",
  },
  {
    ID: 4,
    Nombre: "Benji Anthonio Alcivar",
    Identificacion: "1365749563",
  },
  {
    ID: 5,
    Nombre: "Fernando Macia Mejia",
    Identificacion: "08542786249",
  },
];

export const inscripciones: Inscripcion[] = [
  {
    ID: 1,
    ID_Curso: 1,
    ID_Aspirante: 1,
    Fecha: new Date("01/01/2024"),
    Hora: new Date("10:00"),
    Valor_Cancelado: 50,
  },
  {
    ID: 2,
    ID_Curso: 2,
    ID_Aspirante: 2,
    Fecha: new Date("03/02/2024"),
    Hora: new Date("10:00"),
    Valor_Cancelado: 50,
  },
  {
    ID: 3,
    ID_Curso: 3,
    ID_Aspirante: 3,
    Fecha: new Date("05/05/2024"),
    Hora: new Date("10:00"),
    Valor_Cancelado: 50,
  },
  {
    ID: 4,
    ID_Curso: 4,
    ID_Aspirante: 4,
    Fecha: new Date("05/05/2024"),
    Hora: new Date("10:00"),
    Valor_Cancelado: 50,
  },
  {
    ID: 5,
    ID_Curso: 5,
    ID_Aspirante: 5,
    Fecha: new Date("05/05/2024"),
    Hora: new Date("10:00"),
    Valor_Cancelado: 50,
  },
];

export const detallesInscripcion: DetallesInscripcion[] = [];

inscripciones.map((inscripcion) => {
  const { ID_Curso, ID_Aspirante } = inscripcion;

  const Curso = cursos.find((curso) => Curso.ID === ID_Curso) as Cursos;
  const aspiranteInscripcion = aspirantes.find(
    (aspirante) => aspirante.ID === ID_Aspirante
  ) as Aspirante;

  detallesInscripcion.push({
    ...inscripcion,
    Curso,
    aspirante: aspiranteInscripcion,
  });
});
