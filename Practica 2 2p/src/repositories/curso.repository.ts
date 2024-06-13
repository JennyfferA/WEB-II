import { CreateCursoDto, UpdateCursoDto } from '../dtos';
import { CursoEntity } from '../entities/curso.entity';



export abstract class CursoRepository {

  abstract create( createdescripcionDto: CreateCursoDto ): Promise<CursoEntity>;
  abstract getAll(): Promise<CursoEntity[]>;
  abstract findById( id: number ): Promise<CursoEntity>;
  abstract updateById( updatedescripcionDto: UpdateCursoDto ): Promise<CursoEntity>;
  abstract deleteById( id: number ): Promise<CursoEntity>;

}