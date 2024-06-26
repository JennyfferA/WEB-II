import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Inscripcion } from 'src/inscripcion/entities/inscripcion.entity';

@ObjectType()
@Entity({ name: 'aspirantes' })
export class Aspirante {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  identificacion: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.aspirante)
  @Field(() => [Inscripcion], { nullable: true })
  inscripciones?: Inscripcion[];
}
