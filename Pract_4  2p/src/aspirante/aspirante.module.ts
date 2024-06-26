import { Module } from '@nestjs/common';
import { AspirantesService } from './aspirante.service';
import { AspiranteResolver } from './aspirante.resolver';
import { Aspirante } from './entities/aspirante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [AspiranteResolver, AspirantesService],
  imports: [ TypeOrmModule.forFeature([Aspirante]) ],
  exports: [ TypeOrmModule ]
})
export class AspiranteModule {}
