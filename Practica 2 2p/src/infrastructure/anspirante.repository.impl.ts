import { CreateAnspiranteDto,UpdateAnspiranteDto } from '../dtos'
import {  AnspiranteDatasource  } from '../datasource/anspirante.datasource';
import {  AnspiranteEntity  } from '../entities/anspirante.entity';
import {  AnspiranteRepository  } from '../repositories/anspirante.repository';

export class AnspiranteRepositoryImpl implements AnspiranteRepository {

constructor(
private readonly datasource: AnspiranteDatasource,
) { }


create( createAnspiranteDto: CreateAnspiranteDto ): Promise<AnspiranteEntity> {
return this.datasource.create( createAnspiranteDto );
}

getAll(): Promise<AnspiranteEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<AnspiranteEntity> {
return this.datasource.findById( id );
}

updateById( updateAnspiranteDto: UpdateAnspiranteDto ): Promise<AnspiranteEntity> {
return this.datasource.updateById( updateAnspiranteDto );
}

deleteById( id: number ): Promise<AnspiranteEntity> {
return this.datasource.deleteById( id );
}

}


