import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AspiranteService } from './anspirante.service';
import { AnspiranteController } from './anspirante.controller';
import { Aspirante } from './entities/anspirante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aspirante])],
  controllers: [AnspiranteController],
  providers: [AspiranteService],
  exports: [TypeOrmModule],
})
export class AspiranteModule {}
