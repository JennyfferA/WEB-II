import { CreateCursoDto,UpdateCursoDto } from '../dtos'
import {  CursoDatasource  } from '../datasource/curso.datasource';
import {  CursoEntity  } from '../entities/curso.entity';
import {  CursoRepository  } from '../repositories/curso.repository';

export class CursoRepositoryImpl implements CursoRepository {

constructor(
private readonly datasource: CursoDatasource,
) { }


create( createCursoDto: CreateCursoDto ): Promise<CursoEntity> {
return this.datasource.create( createCursoDto );
}

getAll(): Promise<CursoEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<CursoEntity> {
return this.datasource.findById( id );
}

updateById( updateCursoDto: UpdateCursoDto ): Promise<CursoEntity> {
return this.datasource.updateById( updateCursoDto );
}

deleteById( id: number ): Promise<CursoEntity> {
return this.datasource.deleteById( id );
}

}


