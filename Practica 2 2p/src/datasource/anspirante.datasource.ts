import { CreateAnspiranteDto, UpdateAnspiranteDto } from '../dtos';
import { AnspiranteEntity } from '../entities/anspirante.entity';



export abstract class AnspiranteDatasource {

  abstract create( createTodoDto: CreateAnspiranteDto ): Promise<AnspiranteEntity>;
  abstract getAll(): Promise<AnspiranteEntity[]>;
  abstract findById( id: number ): Promise<AnspiranteEntity>;
  abstract updateById( updatenombreDto: UpdateAnspiranteDto ): Promise<AnspiranteEntity>;
  abstract deleteById( id: number ): Promise<AnspiranteEntity>;

}