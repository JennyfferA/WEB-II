import { CreateInscripcionesDto, UpdateInscripcionDto } from '../dtos';
import { InscripcionEntity } from '../entities/inscripcion.entity';



export abstract class InscripcionRepository {

  abstract create( createfechaDto: CreateInscripcionesDto ): Promise<InscripcionEntity>;
  abstract getAll(): Promise<InscripcionEntity[]>;
  abstract findById( id: number ): Promise<InscripcionEntity>;
  abstract updateById( updatefechaDto: UpdateInscripcionDto ): Promise<InscripcionEntity>;
  abstract deleteById( id: number ): Promise<InscripcionEntity>;

}