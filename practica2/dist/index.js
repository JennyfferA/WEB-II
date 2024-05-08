"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const datos_1 = require("./datos");
const inscripcion_1 = require("./inscripcion");
// Inicialización de la app
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default // Conectar a MongoDB
    .connect('mongodb://localhost:27017/Inscripcionencurso', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error de conexión a la base de datos:', err));
const { inscripcionJuanProgramacion } = await (0, datos_1.crearDatos)();
// Eliminar la inscripción del aspirante Juan
eliminarInscripcion(inscripcionJuanProgramacion._id);
// Recuperar la inscripción del aspirante Juan
recuperarInscripcion(inscripcionJuanProgramacion._id);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// función eliminar que recibe un id de una inscripción y cambia el estado a false
function eliminarInscripcion(id_inscripcion) {
    inscripcion_1.Inscripcion.findByIdAndUpdate(id_inscripcion, { estado: false }, { new: true })
        .then((resultado) => console.log('Inscripción eliminada:', resultado))
        .catch((error) => console.error('Error al eliminar la inscripción:', error));
}
// Funión recuperar que recibe un id de una inscripción y cambia el estado a true
function recuperarInscripcion(id_inscripcion) {
    inscripcion_1.Inscripcion.findByIdAndUpdate(id_inscripcion, { estado: true }, { new: true })
        .then((resultado) => console.log('Inscripción recuperada:', resultado))
        .catch((error) => console.error('Error al recuperar la inscripción:', error));
}
