import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AspiranteController {

  constructor() { }

  public getAspirantes = async (req: Request, res: Response) => {
    try {
      const aspirantes = await prisma.aspirante.findMany({
        where: { estado: 'Activo' },
      });
      res.json(aspirantes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los aspirantes.' });
    }
  };

  public createAspirante = async (req: Request, res: Response) => {
    try {
      const { nombre, identificacion } = req.body;
      const newAspirante = await prisma.aspirante.create({
        data: { nombre, identificacion },
      });
      res.json(newAspirante);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el aspirante.' });
    }
  };

  public updateAspirante = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nombre, identificacion, estado } = req.body;
      const updatedAspirante = await prisma.aspirante.update({
        where: { id: Number(id) },
        data: { nombre, identificacion, estado },
      });
      res.json(updatedAspirante);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el aspirante.' });
    }
  };

  public deleteAspirante = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const aspirante = await prisma.aspirante.findUnique({
        where: { id: Number(id) },
      });

      if (!aspirante) {
        return res.status(404).json({ error: 'Aspirante no encontrado.' });
      }

      const deletedAspirante = await prisma.aspirante.update({
        where: { id: Number(id) },
        data: { estado: 'Eliminado' },
      });

      res.json(deletedAspirante);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el aspirante.' });
    }
  };
}
