

import { Router } from 'express';
import { AnspirantesController } from './controller';
import { AnspiranteRepositoryImpl } from '../../infrastructure/anspirante.repository.impl';
import { AnspiranteDatasourceImpl } from '../../infrastructure/datasource/anspirante.datasource.impl';

export class AnspiranteRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new AnspiranteDatasourceImpl();
    const anspiranteRepository = new AnspiranteRepositoryImpl(datasource);
    const anspiranteController = new AnspirantesController(anspiranteRepository);

    router.get('/', anspiranteController.getAnspirantes);
    router.get('/:id', anspiranteController.getAnspiranteById);

    router.post('/', anspiranteController.createAnspirante);
    router.put('/:id', anspiranteController.updateAnspirante);

    return router;
  }
}
