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
exports.AspiranteController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AspiranteController {
    constructor() {
        this.getAspirantes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const aspirantes = yield prisma.aspirante.findMany({
                    where: { estado: 'Activo' },
                });
                res.json(aspirantes);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al obtener los aspirantes.' });
            }
        });
        this.createAspirante = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre, identificacion } = req.body;
                const newAspirante = yield prisma.aspirante.create({
                    data: { nombre, identificacion },
                });
                res.json(newAspirante);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al crear el aspirante.' });
            }
        });
        this.updateAspirante = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nombre, identificacion, estado } = req.body;
                const updatedAspirante = yield prisma.aspirante.update({
                    where: { id: Number(id) },
                    data: { nombre, identificacion, estado },
                });
                res.json(updatedAspirante);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al actualizar el aspirante.' });
            }
        });
        this.deleteAspirante = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const aspirante = yield prisma.aspirante.findUnique({
                    where: { id: Number(id) },
                });
                if (!aspirante) {
                    return res.status(404).json({ error: 'Aspirante no encontrado.' });
                }
                const deletedAspirante = yield prisma.aspirante.update({
                    where: { id: Number(id) },
                    data: { estado: 'Eliminado' },
                });
                res.json(deletedAspirante);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al eliminar el aspirante.' });
            }
        });
    }
}
exports.AspiranteController = AspiranteController;
