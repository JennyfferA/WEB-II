import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Inscripcion } from 'src/inscripcion/entities/inscripcion.entity';

@ObjectType()
@Entity({ name: 'cursos' })
export class Curso {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  descripcion: string;

  @Column()
  @Field(() => String)
  fecha_inicio: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.curso)
  @Field(() => [Inscripcion], { nullable: true })
  inscripciones?: Inscripcion[];
}
