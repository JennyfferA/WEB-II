import mongoose, { Document, Model } from 'mongoose'

interface ICurso extends Document {
  id: number
  descripcion: string
  fecha_inicio: string
}

const cursoSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  descripcion: { type: String, required: true },
  fecha_inicio: { type: String, required: true }
})

const Curso: Model<ICurso> = mongoose.model<ICurso>('Curso', cursoSchema)

export { Curso }
