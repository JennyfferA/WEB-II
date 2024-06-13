export class InscripcionEntity {
  constructor(
      public id: number,
      public nombre: string,
      public fecha: string,
      public hora: string,
      public valor_cancelado: number,
      public id_curso: number,
      public id_aspirante: number
  ) {}

  public static fromObject(object: { [key: string]: any }): InscripcionEntity {
      const { id, fecha, hora, valor_cancelado, nombre, id_curso, id_aspirante } = object;

      if (!id) throw new Error('Id is required');
      if (!fecha) throw new Error('Fecha is required');
      if (!hora) throw new Error('Hora is required');
      if (valor_cancelado === undefined || isNaN(valor_cancelado)) throw new Error('Valor_cancelado must be a valid number');
      if (!nombre) throw new Error('Nombre is required');
      if (!id_curso || isNaN(id_curso)) throw new Error('Id_curso is required and must be a valid number');
      if (!id_aspirante || isNaN(id_aspirante)) throw new Error('Id_aspirante is required and must be a valid number');

      // Additional validations or formatting can be added here

      return new InscripcionEntity(id, nombre, fecha, hora, valor_cancelado, id_curso, id_aspirante);
  }
}
