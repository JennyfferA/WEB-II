import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CursosService } from './curso.service';
import { CreateCursoInput } from './dto/create-curso.input';
import { UpdateCursoInput } from './dto/update-curso.input';
import { Curso } from './entities/curso.entity';

@Resolver(() => Curso)
export class CursoResolver {
  constructor(private readonly cursoService: CursosService) {}

  @Mutation(() => Curso)
  async createCurso(@Args('createCursoInput') createCursoInput: CreateCursoInput): Promise<Curso> {
    return this.cursoService.create(createCursoInput);
  }

  @Query(() => [Curso], { name: 'cursos' })
  async findAll(@Args('estado', { type: () => String, nullable: true }) estado: string): Promise<Curso[]> {
    return this.cursoService.findAll(estado);
  }

  @Query(() => Curso, { name: 'curso' })
  async findOne(@Args('id') id: number): Promise<Curso> {
    return this.cursoService.findOne(id);
  }

  @Mutation(() => Curso)
  async updateCurso(@Args('updateCursoInput') updateCursoInput: UpdateCursoInput): Promise<Curso> {
    return this.cursoService.update(updateCursoInput.id, updateCursoInput);
  }

  @Mutation(() => Curso)
  async removeCurso(@Args('id') id: number): Promise<Curso> {
    return this.cursoService.remove(id);
  }
}

