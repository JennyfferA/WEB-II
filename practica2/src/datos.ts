import { crearAspirante, crearCurso, inscribirAspiranteACurso } from './dbHelpers'

interface Inscripcion {
  _id: string
  aspiranteId: string
  cursoId: string
  fecha: string
  hora: string
  costo: number
}

interface DatosCreados {
  inscripcionJuanProgramacion: Inscripcion
  inscripcionMariaDiseno: Inscripcion
  inscripcionPedroMarketing: Inscripcion
}

async function crearDatos(): Promise<DatosCreados> {
  const cursoProgramacion = await crearCurso('Curso de programación', new Date('2021-10-01'))
  const cursoDiseno = await crearCurso('Curso de diseño', new Date('2021-11-01'))
  const cursoMarketing = await crearCurso('Curso de marketing', new Date('2021-12-01'))

  const aspiranteJuan = await crearAspirante('Juan', '1954623784')
  const aspiranteMaria = await crearAspirante('María', '1954623785')
  const aspirantePedro = await crearAspirante('Pedro', '1954623786')

  const inscripcionJuanProgramacion = await inscribirAspiranteACurso(
    aspiranteJuan._id,
    cursoProgramacion._id,
    '2021-10-01',
    '10:00',
    100
  )

  const inscripcionMariaDiseno = await inscribirAspiranteACurso(
    aspiranteMaria._id,
    cursoDiseno._id,
    '2021-10-01',
    '10:00',
    100
  )

  const inscripcionPedroMarketing = await inscribirAspiranteACurso(
    aspirantePedro._id,
    cursoMarketing._id,
    '2021-10-01',
    '10:00',
    100
  )

  // retornar las inscripciones creadas
  return {
    inscripcionJuanProgramacion,
    inscripcionMariaDiseno,
    inscripcionPedroMarketing
  }
}

export { crearDatos }
