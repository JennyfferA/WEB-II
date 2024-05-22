import { Router } from 'express';
import { InscripcionController } from './controller';

export class InscripcionRoutes {

  static get routes(): Router {
    const router = Router();
    const inscripcionController = new InscripcionController();

    router.get('/', inscripcionController.getInscripciones);
    router.post('/', inscripcionController.createInscripcion);
    router.put('/:id', inscripcionController.updateInscripcion);
    router.delete('/:id', inscripcionController.deleteInscripcion);

    return router;
  }
}
