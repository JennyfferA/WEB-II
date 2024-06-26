import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCursoInput {
  @Field(() => String)
  @IsString()
  descripcion?: string;

  @Field(() => String)
  @IsString()
  fecha_inicio: string;

  @Field(() => String)
  @IsString()
  estado: string;
}
