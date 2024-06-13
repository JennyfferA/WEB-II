import { Router } from "express";

import { AnspiranteRoutes } from "./anspirante/routes";
import { CursoRoutes } from "./curso/routes";
import { InscripcionRoutes } from "./inscripcion/routes";
import { GithubRoutes } from "./github/github.routes";

export class AppRoutes { 

    static get routes(): Router {
        const router = Router();

        router.use('/anspirante', AnspiranteRoutes.routes);
        router.use('/curso', CursoRoutes.routes);
        router.use('/inscripcion', InscripcionRoutes.routes);

        //github
        router.use('/github', GithubRoutes.routes );
        
        return router;
    }
}