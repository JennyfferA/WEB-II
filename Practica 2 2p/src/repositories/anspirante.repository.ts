import { CreateAnspiranteDto, UpdateAnspiranteDto } from '../dtos';
import { AnspiranteEntity } from '../entities/anspirante.entity';



export abstract class AnspiranteRepository {

  abstract create( createnombreDto: CreateAnspiranteDto ): Promise<AnspiranteEntity>;
  abstract getAll(): Promise<AnspiranteEntity[]>;
  abstract findById( id: number ): Promise<AnspiranteEntity>;
  abstract updateById( updatenombreDto: UpdateAnspiranteDto ): Promise<AnspiranteEntity>;
  abstract deleteById( id: number ): Promise<AnspiranteEntity>;

}