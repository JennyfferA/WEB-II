import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateAspiranteInput } from './create-aspirante.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';



  @InputType()
  export class UpdateAspiranteInput extends PartialType(CreateAspiranteInput) {
  
    @Field(() => ID)
    @IsInt()
    id: number;
  }
