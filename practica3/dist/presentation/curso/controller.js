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
exports.CursoController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CursoController {
    constructor() {
        this.getCursos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cursos = yield prisma.curso.findMany({
                    where: { estado: 'Activo' },
                });
                res.json(cursos);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al obtener los cursos.' });
            }
        });
        this.createCurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { descripcion, fecha_inicio } = req.body;
                const newCurso = yield prisma.curso.create({
                    data: { descripcion, fecha_inicio },
                });
                res.json(newCurso);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al crear el curso.' });
            }
        });
        this.updateCurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { descripcion, fecha_inicio, estado } = req.body;
                const updatedCurso = yield prisma.curso.update({
                    where: { id: Number(id) },
                    data: { descripcion, fecha_inicio, estado },
                });
                res.json(updatedCurso);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al actualizar el curso.' });
            }
        });
        this.deleteCurso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const curso = yield prisma.curso.findUnique({
                    where: { id: Number(id) },
                });
                if (!curso) {
                    return res.status(404).json({ error: 'Curso no encontrado.' });
                }
                const deletedCurso = yield prisma.curso.update({
                    where: { id: Number(id) },
                    data: { estado: 'Eliminado' },
                });
                res.json(deletedCurso);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al eliminar el curso.' });
            }
        });
    }
}
exports.CursoController = CursoController;
