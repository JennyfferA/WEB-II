"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class InscripcionRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const inscripcionController = new controller_1.InscripcionController();
        router.get('/', inscripcionController.getInscripciones);
        router.post('/', inscripcionController.createInscripcion);
        router.put('/:id', inscripcionController.updateInscripcion);
        router.delete('/:id', inscripcionController.deleteInscripcion);
        return router;
    }
}
exports.InscripcionRoutes = InscripcionRoutes;
