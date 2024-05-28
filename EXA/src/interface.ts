export interface Cursos {
    ID: number;
    Descripcion: string;
    Fecha_Inicio: Date;
  }
  
  export interface Aspirante {
    ID: number;
    Nombre: string;
    Identificacion: string;
  }
  
  export interface Inscripcion {
    ID: number;
    ID_Curso: number;
    ID_Aspirante: number;
    Fecha: Date;
    Hora: Date;
    Valor_Cancelado: number;
  }
  
  export interface DetallesInscripcion extends Inscripcion {
    Curso: Cursos;
    aspirante: Aspirante;
  }
  
  export interface Secuencia {
    ID: number;
    Nombre: string;
    secuencia: number;
  }
  
  export interface RickAndMortyCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
  }
  
  export interface Location {
    name: string;
    url: string;
  }
  