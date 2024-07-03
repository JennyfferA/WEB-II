import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionGateway } from './inscripcion.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscripcionEntiti } from './entiti/entiti.inscripcion';

@Module({
  providers: [InscripcionGateway, InscripcionService],
  imports: [ TypeOrmModule.forFeature([InscripcionEntiti]) ],
  exports: [ TypeOrmModule ]
})
export class inscripcionModule {}
