import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateCursoInput } from './create-curso.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';




  @InputType()
  export class UpdateCursoInput extends PartialType(CreateCursoInput) {
  
    @Field(() => ID)
    @IsInt()
    id: number;
  }