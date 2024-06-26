import { Injectable } from '@nestjs/common';
import { CreateCursoInput } from './dto/create-curso.input';
import { UpdateCursoInput } from './dto/update-curso.input';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>
  ) {}
  
  async create(createCursoInput: CreateCursoInput): Promise<Curso> {
    const created = this.cursoRepository.create(createCursoInput);
    return await this.cursoRepository.save(created);
  }

  async findAll(estado: string): Promise<Curso[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.cursoRepository.find({ where: { estado } });
    }
    return await this.cursoRepository.find();
  }
  

  async findOne(id: number): Promise<Curso> {
    return await this.cursoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCursoInput: UpdateCursoInput): Promise<Curso> {
    const updated = await this.cursoRepository.preload({
      id,
      ...updateCursoInput,
    });
    if (!updated) throw new Error(`Curso with id: ${id} not found`);
    return await this.cursoRepository.save(updated);
  }

  async remove(id: number) {
    const curso = await this.findOne(id);
    curso.estado = 'Desactivo';
    return this.cursoRepository.save(curso);
  }
}
