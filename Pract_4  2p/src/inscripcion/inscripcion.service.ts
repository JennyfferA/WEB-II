import { Injectable } from '@nestjs/common';
import { CreateInscripcionInput } from './dto/create-inscripcion.input';
import { UpdateInscripcionInput } from './dto/update-inscripcion.input';
import { Repository } from 'typeorm';
import { Inscripcion } from './entities/inscripcion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InscripcionService {
  constructor(
    @InjectRepository(Inscripcion)
    private readonly inscripcionRepository: Repository<Inscripcion>
  ) {}

  async create(createInscripcionInput: CreateInscripcionInput): Promise<Inscripcion> {
    const inscripcion = this.inscripcionRepository.create({
      ...createInscripcionInput,
      curso: { id: createInscripcionInput.cursoId },
      aspirante: { id: createInscripcionInput.aspiranteId }
    });
    const { id } = await this.inscripcionRepository.save(inscripcion);
    return await this.findOne(+id);
  }

  async findAll(estado: string): Promise<Inscripcion[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.inscripcionRepository.find({ where: { estado } });
    }
    return await this.inscripcionRepository.find();
  }

  async findOne(id: number): Promise<Inscripcion> {
    return await this.inscripcionRepository.findOne({ where: { id } });
  }

  async update(id: number, updateInscripcionInput: UpdateInscripcionInput): Promise<Inscripcion> {
    const updated = await this.inscripcionRepository.preload(updateInscripcionInput);
    return await this.inscripcionRepository.save(updated);
  }

  async remove(id: number): Promise<Inscripcion> {
    const inscripcion = await this.findOne(id);
    if (!inscripcion) return null;
    inscripcion.estado = 'Desactivo';
    return this.inscripcionRepository.save(inscripcion);
  }
}
