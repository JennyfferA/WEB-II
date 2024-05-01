import { DetallesInscripcion, RickAndMortyCharacter } from "./interfaces";
import { detallesInscripcion } from "./data";

let detallesInscripcionData: DetallesInscripcion[] = detallesInscripcion;
let tempDetallesInscripcion: DetallesInscripcion[] = detallesInscripcion;

// eliminar elemento Pasando un array y un id
function eliminarElemento(detallesArr: DetallesInscripcion[], id: number) {
  tempDetallesInscripcion = detallesArr;
  detallesInscripcionData = detallesArr.filter(
    (detallesInscripcion) => detallesInscripcion.ID !== id
  );
}

eliminarElemento(detallesInscripcionData, 5);
eliminarElemento(detallesInscripcionData, 2);

// llamando a  callback para imprimir elemento eliminado
function eliminarElementoV2(
  detallesArr: DetallesInscripcion[],
  id: number,
  callback: (data: DetallesInscripcion) => void
) {
  tempDetallesInscripcion = detallesArr;
  const elementoEliminado = detallesArr.find(
    (detallesInscripcion) => detallesInscripcion.ID === id
  );
  detallesInscripcionData = detallesArr.filter(
    (detallesInscripcion) => detallesInscripcion.ID !== id
  );

  if (elementoEliminado) callback(elementoEliminado);
  else console.log(`El elemento con id ${id} no fue encontrado`);
}

eliminarElementoV2(
  detallesInscripcionData,
  3,
  (detallesInscripcion: DetallesInscripcion) => {
    console.log(`Elemento eliminado:`, detallesInscripcion);
  }
);

const REST_API_URL = "https://rickandmortyapi.com/api/character/22";

// Fech con async/await
const obtenerPersonaje = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = (await response.json()) as RickAndMortyCharacter;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

console.log("Llamada a un servicio REST de acceso libre");
console.log("https://rickandmortyapi.com/api/character/22");
obtenerPersonaje(REST_API_URL);
