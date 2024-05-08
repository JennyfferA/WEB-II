import express, { Application, Request, Response } from 'express'
import mongoose, { Document } from 'mongoose'
import { crearDatos } from './datos'
import { Inscripcion, InscripcionModel } from './inscripcion'

// Inicialización de la app
const app: Application = express()
app.use(express.json())

mongoose // Conectar a MongoDB
  .connect('mongodb://localhost:27017/Inscripcionencurso', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error de conexión a la base de datos:', err))

const { inscripcionJuanProgramacion }: { inscripcionJuanProgramacion: Inscripcion } =
  await crearDatos()

// Eliminar la inscripción del aspirante Juan
eliminarInscripcion(inscripcionJuanProgramacion._id)

// Recuperar la inscripción del aspirante Juan
recuperarInscripcion(inscripcionJuanProgramacion._id)

const PORT: number = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// función eliminar que recibe un id de una inscripción y cambia el estado a false
function eliminarInscripcion(id_inscripcion: string): void {
  Inscripcion.findByIdAndUpdate(id_inscripcion, { estado: false }, { new: true })
    .then((resultado: Document | null) => console.log('Inscripción eliminada:', resultado))
    .catch((error: Error) => console.error('Error al eliminar la inscripción:', error))
}

// Funión recuperar que recibe un id de una inscripción y cambia el estado a true
function recuperarInscripcion(id_inscripcion: string): void {
  Inscripcion.findByIdAndUpdate(id_inscripcion, { estado: true }, { new: true })
    .then((resultado: Document | null) => console.log('Inscripción recuperada:', resultado))
    .catch((error: Error) => console.error('Error al recuperar la inscripción:', error))
}
