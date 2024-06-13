import { prisma } from '../../data/postgres';
import { CreateCursoDto,  UpdateCursoDto } from '../../dtos';
import {  CursoDatasource  } from '../../datasource/curso.datasource';
import {  CursoEntity  } from '../../entities/curso.entity';



export class CursoDatasourceImpl implements CursoDatasource {

  async create( createCursosDto: CreateCursoDto ): Promise<CursoEntity> {
    const curso = await prisma.curso.create({
      data: createCursosDto!
    });

    return CursoEntity.fromObject( curso );
  }

  async getAll(): Promise<CursoEntity[]> {
    const cursos = await prisma.curso.findMany();
    return cursos.map( curso => CursoEntity.fromObject(curso) );
  }

  async findById( id: number ): Promise<CursoEntity> {
    const curso = await prisma.curso.findFirst({
      where: { id }
    });

    if ( !curso ) throw `Curso with id ${ id } not found`;
    return CursoEntity.fromObject(curso);
  }

  async updateById( updateCursoDto: UpdateCursoDto ): Promise<CursoEntity> {
    await this.findById( updateCursoDto.id );
    
    const updatedcurso = await prisma.curso.update({
      where: { id: updateCursoDto.id },
      data: updateCursoDto!
    });

    return CursoEntity.fromObject(updatedcurso);
  }

  async deleteById( id: number ): Promise<CursoEntity> {
    await this.findById( id );
    const deleted = await prisma.curso.delete({
      where: { id }
    });

    return CursoEntity.fromObject( deleted );
  }

}