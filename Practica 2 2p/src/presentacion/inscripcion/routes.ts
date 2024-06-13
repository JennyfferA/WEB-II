
import { Router } from 'express';
import { InscripcionController } from './controller';
import { InscripcionRepositoryImpl } from '../../infrastructure/inscripcion.repository.impl';
import { InscripcionDatasourceImpl } from '../../infrastructure/datasource/inscripcion.datasource.impl';

export class InscripcionRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new InscripcionDatasourceImpl();
    const inscripcionRepository = new InscripcionRepositoryImpl(datasource);
    const inscripcionController = new InscripcionController(inscripcionRepository);

    router.get('/', inscripcionController.getinscricpicon);
    router.get('/:id', inscripcionController.getinscripcionById);

    router.post('/', inscripcionController.createinscripcion);
    router.put('/:id', inscripcionController.updateInscripcion);

    return router;
  }
}
