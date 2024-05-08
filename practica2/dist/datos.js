"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearDatos = void 0;
const dbHelpers_1 = require("./dbHelpers");
function crearDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        const cursoProgramacion = yield (0, dbHelpers_1.crearCurso)('Curso de programación', new Date('2021-10-01'));
        const cursoDiseno = yield (0, dbHelpers_1.crearCurso)('Curso de diseño', new Date('2021-11-01'));
        const cursoMarketing = yield (0, dbHelpers_1.crearCurso)('Curso de marketing', new Date('2021-12-01'));
        const aspiranteJuan = yield (0, dbHelpers_1.crearAspirante)('Juan', '1954623784');
        const aspiranteMaria = yield (0, dbHelpers_1.crearAspirante)('María', '1954623785');
        const aspirantePedro = yield (0, dbHelpers_1.crearAspirante)('Pedro', '1954623786');
        const inscripcionJuanProgramacion = yield (0, dbHelpers_1.inscribirAspiranteACurso)(aspiranteJuan._id, cursoProgramacion._id, '2021-10-01', '10:00', 100);
        const inscripcionMariaDiseno = yield (0, dbHelpers_1.inscribirAspiranteACurso)(aspiranteMaria._id, cursoDiseno._id, '2021-10-01', '10:00', 100);
        const inscripcionPedroMarketing = yield (0, dbHelpers_1.inscribirAspiranteACurso)(aspirantePedro._id, cursoMarketing._id, '2021-10-01', '10:00', 100);
        // retornar las inscripciones creadas
        return {
            inscripcionJuanProgramacion,
            inscripcionMariaDiseno,
            inscripcionPedroMarketing
        };
    });
}
exports.crearDatos = crearDatos;
