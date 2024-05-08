import mongoose, { Schema, Document, Model } from 'mongoose'

interface IInscripcion extends Document {
  id: number
  id_curso: Schema.Types.ObjectId
  id_aspirante: Schema.Types.ObjectId
  fecha: string
  hora: string
  valor_cancelado: number
  estado: boolean
}

const inscripcionSchema: Schema<IInscripcion> = new mongoose.Schema({
  id: Number,
  id_curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curso'
  },
  id_aspirante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Aspirante'
  },
  fecha: String,
  hora: String,
  valor_cancelado: Number,
  estado: Boolean
})

const Inscripcion: Model<IInscripcion> = mongoose.model<IInscripcion>(
  'Inscripcion',
  inscripcionSchema
)

export { Inscripcion }
