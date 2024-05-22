import { Router } from 'express';
import { AspiranteController } from './controller';

export class AspiranteRoutes {

  static get routes(): Router {
    const router = Router();
    const aspiranteController = new AspiranteController();

    router.get('/', aspiranteController.getAspirantes);
    router.post('/', aspiranteController.createAspirante);
    router.put('/:id', aspiranteController.updateAspirante);
    router.delete('/:id', aspiranteController.deleteAspirante);

    return router;
  }
}
