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
exports.InscripcionController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class InscripcionController {
    constructor() {
        this.getInscripciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const inscripciones = yield prisma.inscripcion.findMany({
                    where: { estado: 'Activo' },
                });
                res.json(inscripciones);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al obtener las inscripciones.' });
            }
        });
        this.createInscripcion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_curso, id_aspirante, fecha, hora, valor_cancelado } = req.body;
                const newInscripcion = yield prisma.inscripcion.create({
                    data: { id_curso, id_aspirante, fecha, hora, valor_cancelado },
                });
                res.json(newInscripcion);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al crear la inscripción.' });
            }
        });
        this.updateInscripcion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { id_curso, id_aspirante, fecha, hora, valor_cancelado, estado } = req.body;
                const updatedInscripcion = yield prisma.inscripcion.update({
                    where: { id: Number(id) },
                    data: { id_curso, id_aspirante, fecha, hora, valor_cancelado, estado },
                });
                res.json(updatedInscripcion);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al actualizar la inscripción.' });
            }
        });
        this.deleteInscripcion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const inscripcion = yield prisma.inscripcion.findUnique({
                    where: { id: Number(id) },
                });
                if (!inscripcion) {
                    return res.status(404).json({ error: 'Inscripción no encontrada.' });
                }
                const deletedInscripcion = yield prisma.inscripcion.update({
                    where: { id: Number(id) },
                    data: { estado: 'Eliminado' },
                });
                res.json(deletedInscripcion);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al eliminar la inscripción.' });
            }
        });
    }
}
exports.InscripcionController = InscripcionController;
