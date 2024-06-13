import { prisma } from '../../data/postgres';
import { CreateAnspiranteDto,  UpdateAnspiranteDto } from '../../dtos';
import {  AnspiranteDatasource  } from '../../datasource/anspirante.datasource';
import {  AnspiranteEntity  } from '../../entities/anspirante.entity';




export class AnspiranteDatasourceImpl implements AnspiranteDatasource {

  async create( createAnspiranteDto: CreateAnspiranteDto ): Promise<AnspiranteEntity> {
    const anspirante = await prisma.anspirante.create({ data: createAnspiranteDto!
    });

    return AnspiranteEntity.fromObject( anspirante );
  }

  async getAll(): Promise<AnspiranteEntity[]> {
    const anspirante = await prisma.anspirante.findMany();
    return anspirante.map( anspirante => AnspiranteEntity.fromObject(anspirante) );
  }

  async findById( id: number ): Promise<AnspiranteEntity> {
    const anspirante = await prisma.anspirante.findUnique({
      where: { id }
    });

    if ( !anspirante ) throw `Anspirante with id ${ id } not found`;
    return AnspiranteEntity.fromObject(anspirante);
  }

  async updateById( updateAnspiranteDto: UpdateAnspiranteDto ): Promise<AnspiranteEntity> {
    await this.findById( updateAnspiranteDto.id );
    
    const updatedAnspirante = await prisma.anspirante.update({
      where: { id: updateAnspiranteDto.id },
      data: updateAnspiranteDto!
    });

    return AnspiranteEntity.fromObject(updatedAnspirante);
  }

  async deleteById( id: number ): Promise<AnspiranteEntity> {
    await this.findById( id );
    const deleted = await prisma.anspirante.delete({
      where: { id }
    });

    return AnspiranteEntity.fromObject( deleted );
  }

}