import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CandidatoPorDignidadModule } from './aprendizaje/candidatopordignidad.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ CandidatoPorDignidadModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
