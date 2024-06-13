import { Request, Response } from 'express';
import { CreateCursoDto, UpdateCursoDto } from '../../dtos';
import { CursoRepository } from '../../repositories/curso.repository';


export class CursosController {

  //* Dependency Injection
  constructor(
    private readonly cursoRepository: CursoRepository,
  ) { }


  public getCurso = async ( req: Request, res: Response ) => {
    const curso = await this.cursoRepository.getAll();
    return res.json( curso );
  };

  public getCursoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const curso = await this.cursoRepository.findById( id );
      res.json( curso );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCurso = async ( req: Request, res: Response ) => {
    const [ error, createCursoDto ] = CreateCursoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.cursoRepository.create( createCursoDto! );
    res.json( todo );

  };

  public updateCurso = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCursoDto ] = UpdateCursoDto.create( { ...req.body, id } )
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCurso = await this.cursoRepository.updateById( updateCursoDto! );
    return res.json( updatedCurso );

  };




}