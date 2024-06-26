import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InscripcionService } from './inscripcion.service';
import { CreateInscripcionInput } from './dto/create-inscripcion.input';
import { UpdateInscripcionInput } from './dto/update-inscripcion.input';
import { Inscripcion } from './entities/inscripcion.entity';

@Resolver(() => Inscripcion)
export class InscripcionResolver {
  constructor(private readonly inscripcionService: InscripcionService) {}

  @Mutation(() => Inscripcion)
  async create(@Args('createInscripcionInput') createInscripcionInput: CreateInscripcionInput): Promise<Inscripcion> {
    return this.inscripcionService.create(createInscripcionInput);
  }

  @Query(() => [Inscripcion], { name: 'inscripciones' })
  async findAll(@Args('estado', { type: () => String, nullable: true }) estado: string): Promise<Inscripcion[]> {
    return this.inscripcionService.findAll(estado);
  }

  @Query(() => Inscripcion, { name: 'inscripcion' })
  async findOne(@Args('id') id: number): Promise<Inscripcion> {
    return this.inscripcionService.findOne(id);
  }

  @Mutation(() => Inscripcion)
  async update(@Args('updateInscripcionInput') updateInscripcionInput: UpdateInscripcionInput): Promise<Inscripcion> {
    return this.inscripcionService.update(updateInscripcionInput.id, updateInscripcionInput);
  }

  @Mutation(() => Inscripcion)
  async remove(@Args('id') id: number): Promise<Inscripcion> {
    return this.inscripcionService.remove(id);
  }
}
