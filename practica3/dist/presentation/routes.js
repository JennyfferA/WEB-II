"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./aspirante/routes");
const routes_2 = require("./curso/routes");
const routes_3 = require("./inscripcion/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/aspirantes', routes_1.AspiranteRoutes.routes);
        router.use('/api/cursos', routes_2.CursoRoutes.routes);
        router.use('/api/inscripciones', routes_3.InscripcionRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
