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
exports.inscribirAspiranteACurso = exports.crearAspirante = exports.crearCurso = void 0;
const aspirante_1 = require("./aspirante");
const curso_1 = require("./curso");
const inscripcion_1 = require("./inscripcion");
// Modelos
// Crear un nuevo curso en la base de datos
function crearCurso(descripcion, fecha_inicio) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const nuevoCurso = new curso_1.Curso({
                descripcion: descripcion,
                fecha_inicio: fecha_inicio
            });
            const resultado = yield nuevoCurso.save();
            console.log('Curso creado:', resultado);
            return nuevoCurso;
        }
        catch (error) {
            console.error('Error al crear el curso:', error);
            throw error;
        }
    });
}
exports.crearCurso = crearCurso;
// Crear un nuevo aspirante en la base de datos
function crearAspirante(nombre, identificacion) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const nuevoAspirante = new aspirante_1.Aspirante({
                nombre: nombre,
                identificacion: identificacion
            });
            const resultado = yield nuevoAspirante.save();
            console.log('Aspirante creado:', resultado);
            return nuevoAspirante;
        }
        catch (error) {
            console.error('Error al crear el aspirante:', error);
            throw error;
        }
    });
}
exports.crearAspirante = crearAspirante;
// Inscribir un aspirante a un curso
function inscribirAspiranteACurso(id_curso, id_aspirante, fecha, hora, valor) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const nuevaInscripcion = new inscripcion_1.Inscripcion({
                id_curso: id_curso,
                id_aspirante: id_aspirante,
                fecha: fecha,
                hora: hora,
                valor_cancelado: valor,
                estado: true
            });
            const resultado = yield nuevaInscripcion.save();
            console.log('Inscripción creada:', resultado);
            return resultado;
        }
        catch (error) {
            console.error('Error al crear la inscripción:', error);
            throw error;
        }
    });
}
exports.inscribirAspiranteACurso = inscribirAspiranteACurso;
