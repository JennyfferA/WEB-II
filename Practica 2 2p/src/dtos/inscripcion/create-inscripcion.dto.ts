export class CreateInscripcionesDto {
  public readonly id_curso: number;
  public readonly id_aspirante: number;
  public readonly fecha: string;
  public readonly hora: string;
  public readonly valor_cancelado: number;

  private constructor(
      id_curso: number,
      id_aspirante: number,
      fecha: string,
      hora: string,
      valor_cancelado: number
  ) {
      this.id_curso = id_curso;
      this.id_aspirante = id_aspirante;
      this.fecha = fecha;
      this.hora = hora;
      this.valor_cancelado = valor_cancelado;
  }

  static create(props: { [key: string]: any }): [string?, CreateInscripcionesDto?] {
      const { id_curso, id_aspirante, fecha, hora, valor_cancelado } = props;

      if (!id_curso || isNaN(id_curso)) return ['id_curso property is required', undefined];
      if (!id_aspirante || isNaN(id_aspirante)) return ['id_aspirante property is required', undefined];
      if (!fecha) return ['fecha property is required', undefined];
      if (!hora) return ['hora property is required', undefined];
      if (!valor_cancelado || isNaN(valor_cancelado)) return ['valor_cancelado property is required', undefined];

      return [undefined, new CreateInscripcionesDto(id_curso, id_aspirante, fecha, hora, valor_cancelado)];
  }
}
