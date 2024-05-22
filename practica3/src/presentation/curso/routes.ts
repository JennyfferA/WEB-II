import { Router } from 'express';
import { CursoController } from './controller';

export class CursoRoutes {

  static get routes(): Router {
    const router = Router();
    const cursoController = new CursoController();

    router.get('/', cursoController.getCursos);
    router.post('/', cursoController.createCurso);
    router.put('/:id', cursoController.updateCurso);
    router.delete('/:id', cursoController.deleteCurso);

    return router;
  }
}
