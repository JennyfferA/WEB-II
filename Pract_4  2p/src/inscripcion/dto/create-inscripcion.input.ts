import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class CreateInscripcionInput {
  @Field(() => String)
  @IsString()
  idcurso: number;

  @Field(() => String)
  @IsString()
  idaspirante: number;

  @Field(() => String, { nullable: true })
  @IsString()
  fecha?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  hora?: string;

  @Field(() => Int)
  @IsInt()
  valor_cancelado: number;

  @Field(() => String)
  @IsString()
  estado: string;
  cursoId: number;
  aspiranteId: number;
}
