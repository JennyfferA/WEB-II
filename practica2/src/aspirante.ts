import mongoose, { Document, Model, Schema } from 'mongoose'

interface IAspirante extends Document {
  id: number
  nombre: string
  identificacion: string
}

const aspiranteSchema: Schema<IAspirante> = new mongoose.Schema({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  identificacion: { type: String, required: true }
})

const Aspirante: Model<IAspirante> = mongoose.model<IAspirante>('Aspirante', aspiranteSchema)

export { Aspirante }
