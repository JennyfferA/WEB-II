
import { CreateInscripcionesDto,  UpdateInscripcionDto } from '../dtos'
import {  InscripcionDatasource  } from '../datasource/inscripcion.datasource';
import {  InscripcionEntity  } from '../entities/inscripcion.entity';
import {  InscripcionRepository  } from '../repositories/inscripcion.repository';

export class InscripcionRepositoryImpl implements InscripcionRepository {

constructor(
private readonly datasource: InscripcionDatasource,
) { }


create( createInscripcionDto: CreateInscripcionesDto ): Promise<InscripcionEntity> {
return this.datasource.create( createInscripcionDto );
}

getAll(): Promise<InscripcionEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<InscripcionEntity> {
return this.datasource.findById( id );
}

updateById( updateInscripcionDto: UpdateInscripcionDto ): Promise<InscripcionEntity> {
return this.datasource.updateById( updateInscripcionDto );
}

deleteById( id: number ): Promise<InscripcionEntity> {  
return this.datasource.deleteById( id );
}

}
