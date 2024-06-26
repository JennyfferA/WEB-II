import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AspirantesService } from './aspirante.service';
import { CreateAspiranteInput } from './dto/create-aspirante.input';
import { UpdateAspiranteInput } from './dto/update-aspirante.input';
import { Aspirante } from './entities/aspirante.entity';

@Resolver(() => Aspirante)
export class AspiranteResolver {
  constructor(private readonly aspiranteService: AspirantesService) {}

  @Mutation(() => Aspirante)
  async createAspirante(@Args('createAspiranteInput') createAspiranteInput: CreateAspiranteInput): Promise<Aspirante> {
    return this.aspiranteService.create(createAspiranteInput);
  }

  @Query(() => [Aspirante], { name: 'aspirantes' })
  async findAll(@Args('estado', { type: () => String, nullable: true }) estado: string): Promise<Aspirante[]> {
    return this.aspiranteService.findAll(estado);
  }

  @Query(() => Aspirante, { name: 'aspirante' })
  async findOne(@Args('id') id: number): Promise<Aspirante> {
    return this.aspiranteService.findOne(id);
  }

  @Mutation(() => Aspirante)
  async updateAspirante(@Args('updateAspiranteInput') updateAspiranteInput: UpdateAspiranteInput): Promise<Aspirante> {
    return this.aspiranteService.update(updateAspiranteInput.id, updateAspiranteInput);
  }

  @Mutation(() => Aspirante)
  async removeAspirante(@Args('id') id: number): Promise<Aspirante> {
    return this.aspiranteService.remove(id);
  }
}
