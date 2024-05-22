import { Router } from 'express';
import { AspiranteRoutes } from './aspirante/routes';
import { CursoRoutes } from './curso/routes';
import { InscripcionRoutes } from './inscripcion/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/aspirantes', AspiranteRoutes.routes);
    router.use('/api/cursos', CursoRoutes.routes);
    router.use('/api/inscripciones', InscripcionRoutes.routes);

    return router;
  }
}
