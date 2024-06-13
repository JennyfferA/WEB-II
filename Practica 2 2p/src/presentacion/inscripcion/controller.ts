import { Request, Response } from 'express';
import { CreateInscripcionesDto, UpdateInscripcionDto } from '../../dtos';
import { InscripcionRepository } from '../../repositories/inscripcion.repository';


export class InscripcionController {

  //* Dependency Injection
  constructor(
    private readonly InscripcionRepository: InscripcionRepository,
  ) { }


  public getinscricpicon = async ( req: Request, res: Response ) => {
    const curso = await this.InscripcionRepository.getAll();
    return res.json( curso );
  };

  public getinscripcionById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const inscripcion = await this.InscripcionRepository.findById( id );
      res.json( inscripcion );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createinscripcion = async ( req: Request, res: Response ) => {
    const [ error, CreateInscripciconesDto ] = CreateInscripcionesDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.InscripcionRepository.create( CreateInscripciconesDto! );

  };

  public updateInscripcion = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateInscripcionDto ] = UpdateInscripcionDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCurso = await this.InscripcionRepository.updateById( updateInscripcionDto! );
    return res.json( UpdateInscripcionDto );

  };




}