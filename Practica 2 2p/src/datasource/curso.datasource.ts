import { CreateCursoDto, UpdateCursoDto } from '../dtos';
import { CursoEntity } from '../entities/curso.entity';



export abstract class CursoDatasource {

  abstract create( createdescripcionDto: CreateCursoDto ): Promise<CursoEntity>;
  abstract getAll(): Promise<CursoEntity[]>;
  abstract findById( id: number ): Promise<CursoEntity>;
  abstract updateById( updatedescripcion: UpdateCursoDto ): Promise<CursoEntity>;
  abstract deleteById( id: number ): Promise<CursoEntity>;

}