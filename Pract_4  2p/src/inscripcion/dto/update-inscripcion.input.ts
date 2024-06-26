import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateInscripcionInput } from './create-inscripcion.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';


  @InputType()

  export class UpdateInscripcionInput extends PartialType(CreateInscripcionInput) {
  
    @Field(() => ID)
    @IsInt()
    id: number;
    idcurso: number;
    idaspirante: number;
  }
