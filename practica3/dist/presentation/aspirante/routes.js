"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspiranteRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class AspiranteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const aspiranteController = new controller_1.AspiranteController();
        router.get('/', aspiranteController.getAspirantes);
        router.post('/', aspiranteController.createAspirante);
        router.put('/:id', aspiranteController.updateAspirante);
        router.delete('/:id', aspiranteController.deleteAspirante);
        return router;
    }
}
exports.AspiranteRoutes = AspiranteRoutes;
