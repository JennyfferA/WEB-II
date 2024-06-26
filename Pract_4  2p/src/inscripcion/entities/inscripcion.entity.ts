import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Curso } from 'src/curso/entities/curso.entity';
import { Aspirante } from 'src/aspirante/entities/aspirante.entity';

@ObjectType()
@Entity({ name: 'inscripciones' })
export class Inscripcion {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  fecha: string;

  @Column()
  @Field(() => String)
  hora: string;

  @Column()
  @Field(() => Number)
  valor_cancelado: number;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @ManyToOne(() => Curso, (curso) => curso.inscripciones)
  @Field(() => Curso)
  curso: Curso;

  @ManyToOne(() => Aspirante, (aspirante) => aspirante.inscripciones)
  @Field(() => Aspirante)
  aspirante: Aspirante;
}
