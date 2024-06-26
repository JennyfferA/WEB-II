import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionResolver } from './inscripcion.resolver';
import { Inscripcion } from './entities/inscripcion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [InscripcionResolver, InscripcionService],
  imports: [ TypeOrmModule.forFeature([Inscripcion]) ],
  exports: [ TypeOrmModule ]
})
export class InscripcionModule {}
