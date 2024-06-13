import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAnspiranteDto, UpdateAnspiranteDto } from '../../dtos';
import { AnspiranteRepository } from '../../repositories/anspirante.repository';


export class AnspirantesController {

  //* Dependency Injection
  constructor(
    private readonly anspiranteRepository: AnspiranteRepository,
  ) { }


  public getAnspirantes = async (req: Request, res: Response) => {
    const anspirantes = await this.anspiranteRepository.getAll();
    return res.json(anspirantes);
  };

  public getAnspiranteById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const aspirante = await this.anspiranteRepository.findById(id);
      res.json(aspirante);

    } catch (error) {
      res.status(400).json({ error });
    }

  };

  public createAnspirante = async (req: Request, res: Response) => {
    const [error, createAnspiranteDto] = CreateAnspiranteDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const aspirante = await this.anspiranteRepository.create(createAnspiranteDto!);
    res.json(aspirante);

  };

  public updateAnspirante = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAnspiranteDto] = UpdateAnspiranteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedAnspirante = await this.anspiranteRepository.updateById(updateAnspiranteDto!);
    return res.json(updatedAnspirante);

  };


  public deleteAnspirante = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedAnspirante = await this.anspiranteRepository.deleteById(id);
    res.json(deletedAnspirante);

  };

}

