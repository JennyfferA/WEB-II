import { Aspirante } from './aspirante'
import { Curso } from './curso'
import { Inscripcion } from './inscripcion'

// Modelos

// Crear un nuevo curso en la base de datos
async function crearCurso(descripcion: string, fecha_inicio: Date): Promise<Curso> {
  try {
    const nuevoCurso = new Curso({
      descripcion: descripcion,
      fecha_inicio: fecha_inicio
    })

    const resultado = await nuevoCurso.save()
    console.log('Curso creado:', resultado)

    return nuevoCurso
  } catch (error) {
    console.error('Error al crear el curso:', error)
    throw error
  }
}

// Crear un nuevo aspirante en la base de datos
async function crearAspirante(nombre: string, identificacion: number): Promise<Aspirante> {
  try {
    const nuevoAspirante = new Aspirante({
      nombre: nombre,
      identificacion: identificacion
    })

    const resultado = await nuevoAspirante.save()
    console.log('Aspirante creado:', resultado)

    return nuevoAspirante
  } catch (error) {
    console.error('Error al crear el aspirante:', error)
    throw error
  }
}

// Inscribir un aspirante a un curso
async function inscribirAspiranteACurso(
  id_curso: string,
  id_aspirante: string,
  fecha: Date,
  hora: string,
  valor: number
): Promise<Inscripcion> {
  try {
    const nuevaInscripcion = new Inscripcion({
      id_curso: id_curso,
      id_aspirante: id_aspirante,
      fecha: fecha,
      hora: hora,
      valor_cancelado: valor,
      estado: true
    })

    const resultado = await nuevaInscripcion.save()
    console.log('Inscripción creada:', resultado)
    return resultado
  } catch (error) {
    console.error('Error al crear la inscripción:', error)
    throw error
  }
}

export { crearCurso, crearAspirante, inscribirAspiranteACurso }
