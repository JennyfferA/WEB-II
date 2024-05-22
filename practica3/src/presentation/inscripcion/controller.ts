import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class InscripcionController {

  constructor() { }

  public getInscripciones = async (req: Request, res: Response) => {
    try {
      const inscripciones = await prisma.inscripcion.findMany({
        where: { estado: 'Activo' },
      });
      res.json(inscripciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las inscripciones.' });
    }
  };

  public createInscripcion = async (req: Request, res: Response) => {
    try {
      const { id_curso, id_aspirante, fecha, hora, valor_cancelado } = req.body;
      const newInscripcion = await prisma.inscripcion.create({
        data: { id_curso, id_aspirante, fecha, hora, valor_cancelado },
      });
      res.json(newInscripcion);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la inscripción.' });
    }
  };

  public updateInscripcion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { id_curso, id_aspirante, fecha, hora, valor_cancelado, estado } = req.body;
      const updatedInscripcion = await prisma.inscripcion.update({
        where: { id: Number(id) },
        data: { id_curso, id_aspirante, fecha, hora, valor_cancelado, estado },
      });
      res.json(updatedInscripcion);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la inscripción.' });
    }
  };

  public deleteInscripcion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const inscripcion = await prisma.inscripcion.findUnique({
        where: { id: Number(id) },
      });

      if (!inscripcion) {
        return res.status(404).json({ error: 'Inscripción no encontrada.' });
      }

      const deletedInscripcion = await prisma.inscripcion.update({
        where: { id: Number(id) },
        data: { estado: 'Eliminado' },
      });

      res.json(deletedInscripcion);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la inscripción.' });
    }
  };
}
