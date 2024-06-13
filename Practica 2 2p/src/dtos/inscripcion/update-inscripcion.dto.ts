export class UpdateInscripcionDto {
  public readonly id: number;
  public readonly id_curso?: number;
  public readonly id_aspirante?: number;
  public readonly fecha?: string;
  public readonly hora?: string;
  public readonly valor_cancelado?: number;
  public readonly estado?: string;

  private constructor(
      id: number,
      id_curso?: number,
      id_aspirante?: number,
      fecha?: string,
      hora?: string,
      valor_cancelado?: number,
      estado?: string
  ) {
      this.id = id;
      this.id_curso = id_curso;
      this.id_aspirante = id_aspirante;
      this.fecha = fecha;
      this.hora = hora;
      this.valor_cancelado = valor_cancelado;
      this.estado = estado;
  }

  get values(): { [key: string]: any } {
      const returnObj: { [key: string]: any } = {};

      if (this.id_curso !== undefined) returnObj.id_curso = this.id_curso;
      if (this.id_aspirante !== undefined) returnObj.id_aspirante = this.id_aspirante;
      if (this.fecha) returnObj.fecha = this.fecha;
      if (this.hora) returnObj.hora = this.hora;
      if (this.valor_cancelado !== undefined) returnObj.valor_cancelado = this.valor_cancelado;
      if (this.estado) returnObj.estado = this.estado;

      return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateInscripcionDto?] {
      const { id, id_curso, id_aspirante, fecha, hora, valor_cancelado, estado } = props;

      if (!id || isNaN(Number(id))) {
          return ['id must be a valid number', undefined];
      }

      let newFecha = fecha;
      if (fecha) {
          // Additional validation or formatting for date can be added here
      }

      // Similar validations can be added for other fields if needed

      return [undefined, new UpdateInscripcionDto(id, id_curso, id_aspirante, newFecha, hora, valor_cancelado, estado)];
  }
}
