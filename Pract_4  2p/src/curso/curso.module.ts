import { Module } from '@nestjs/common';
import { CursosService } from './curso.service';
import { CursoResolver } from './curso.resolver';
import { Curso } from './entities/curso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CursoResolver, CursosService],
  imports: [ TypeOrmModule.forFeature([Curso]) ],
  exports: [ TypeOrmModule ]
})
export class CursoModule {}
