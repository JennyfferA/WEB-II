import { prisma } from '../../data/postgres';

import { CreateInscripcionesDto,  UpdateInscripcionDto } from '../../dtos';
import {  InscripcionDatasource  } from '../../datasource/inscripcion.datasource';
import {  InscripcionEntity  } from '../../entities/inscripcion.entity';





export class InscripcionDatasourceImpl implements InscripcionDatasource {

  async create( createInscripcionDto: CreateInscripcionesDto ): Promise<InscripcionEntity> {
    const inscripcion = await prisma.inscripcion.create({
      data: createInscripcionDto!
    });

    return InscripcionEntity.fromObject( inscripcion );
  }

  async getAll(): Promise<InscripcionEntity[]> {
    const Inscripcion = await prisma.inscripcion.findMany();
    return Inscripcion.map( Inscripcion => InscripcionEntity.fromObject(Inscripcion) );
  }

  async findById( id: number ): Promise<InscripcionEntity> {
    const inscripcion = await prisma.inscripcion.findFirst({
      where: { id }
    });

    if ( !inscripcion ) throw `inscripcion with id ${ id } not found`;
    return InscripcionEntity.fromObject(inscripcion);
  }

  async updateById( updateInscripcionDto: UpdateInscripcionDto ): Promise<InscripcionEntity> {
    await this.findById( updateInscripcionDto.id );
    
    const updatedinscripcion = await prisma.inscripcion.update({
      where: { id: updateInscripcionDto.id },
      data: updateInscripcionDto!.values
    });

    return InscripcionEntity.fromObject(updatedinscripcion);
  }

  async deleteById( id: number ): Promise<InscripcionEntity> {
    await this.findById( id );
    const deleted = await prisma.inscripcion.delete({
      where: { id }
    });

    return InscripcionEntity.fromObject( deleted );
  }

}