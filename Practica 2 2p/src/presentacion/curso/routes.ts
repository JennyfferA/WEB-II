import { Router } from 'express';
import { CursosController } from './controller';
import { CursoRepositoryImpl } from '../../infrastructure/curso.repository.impl';
import { CursoDatasourceImpl } from '../../infrastructure/datasource/curso.datasource.impl';


export class CursoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new CursoDatasourceImpl ();
    const cursoRepository = new CursoRepositoryImpl(datasource);
    const cursoController = new CursosController(cursoRepository);

    router.get('/', cursoController.getCurso );
    router.get('/:id', cursoController.getCursoById );
    
    router.post('/', cursoController.createCurso );
    router.put('/:id', cursoController.updateCurso );


    return router;
  }


}
