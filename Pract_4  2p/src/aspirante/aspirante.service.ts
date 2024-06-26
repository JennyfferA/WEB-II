import { Injectable } from '@nestjs/common';
import { CreateAspiranteInput } from './dto/create-aspirante.input';
import { UpdateAspiranteInput } from './dto/update-aspirante.input';
import { Aspirante } from './entities/aspirante.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AspirantesService {
  constructor(
    @InjectRepository(Aspirante)
    private readonly aspiranteRepository: Repository<Aspirante>
  ) {}
  
  async create(createAspiranteInput: CreateAspiranteInput): Promise<Aspirante> {
    const created = this.aspiranteRepository.create(createAspiranteInput);
    return await this.aspiranteRepository.save(created);
  }

  async findAll(estado: string): Promise<Aspirante[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.aspiranteRepository.find({ where: { estado } });
    }
    return await this.  aspiranteRepository.find();
  }
  
  async findOne(id: number): Promise<Aspirante> {
    return await this.aspiranteRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAspiranteInput: UpdateAspiranteInput): Promise<Aspirante> {
    const updated = await this.aspiranteRepository.preload({
      id,
      ...updateAspiranteInput,
    });
    if (!updated) throw new Error(`Aspirante with id: ${id} not found`);
    return await this.aspiranteRepository.save(updated);
  }

  async remove(id: number) {
    const aspirante = await this.findOne(id);
    aspirante.estado = 'Desactivo';
    return this.aspiranteRepository.save(aspirante);  }
}
