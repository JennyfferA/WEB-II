"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cursoSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    descripcion: { type: String, required: true },
    fecha_inicio: { type: String, required: true }
});
const Curso = mongoose_1.default.model('Curso', cursoSchema);
exports.Curso = Curso;
