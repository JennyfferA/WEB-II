import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CursoController {

  constructor() { }

  public getCursos = async (req: Request, res: Response) => {
    try {
      const cursos = await prisma.curso.findMany({
        where: { estado: 'Activo' },
      });
      res.json(cursos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los cursos.' });
    }
  };

  public createCurso = async (req: Request, res: Response) => {
    try {
      const { descripcion, fecha_inicio } = req.body;
      const newCurso = await prisma.curso.create({
        data: { descripcion, fecha_inicio },
      });
      res.json(newCurso);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el curso.' });
    }
  };

  public updateCurso = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { descripcion, fecha_inicio, estado } = req.body;
      const updatedCurso = await prisma.curso.update({
        where: { id: Number(id) },
        data: { descripcion, fecha_inicio, estado },
      });
      res.json(updatedCurso);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el curso.' });
    }
  };

  public deleteCurso = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const curso = await prisma.curso.findUnique({
        where: { id: Number(id) },
      });

      if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado.' });
      }

      const deletedCurso = await prisma.curso.update({
        where: { id: Number(id) },
        data: { estado: 'Eliminado' },
      });

      res.json(deletedCurso);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el curso.' });
    }
  };
}
