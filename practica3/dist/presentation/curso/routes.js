"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CursoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const cursoController = new controller_1.CursoController();
        router.get('/', cursoController.getCursos);
        router.post('/', cursoController.createCurso);
        router.put('/:id', cursoController.updateCurso);
        router.delete('/:id', cursoController.deleteCurso);
        return router;
    }
}
exports.CursoRoutes = CursoRoutes;
