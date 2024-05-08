"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inscripcion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const inscripcionSchema = new mongoose_1.default.Schema({
    id: Number,
    id_curso: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Curso'
    },
    id_aspirante: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Aspirante'
    },
    fecha: String,
    hora: String,
    valor_cancelado: Number,
    estado: Boolean
});
const Inscripcion = mongoose_1.default.model('Inscripcion', inscripcionSchema);
exports.Inscripcion = Inscripcion;
