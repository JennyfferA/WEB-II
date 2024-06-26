import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateAspiranteInput {
  @Field(() => String)
  @IsString()
  nombre?: string;

  @Field(() => String)
  @IsString()
  identificacion: string;

  @Field(() => String)
  @IsString()
  estado: string;
}
