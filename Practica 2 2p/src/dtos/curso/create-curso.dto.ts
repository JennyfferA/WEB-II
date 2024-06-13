export class CreateCursoDto {
  static create(body: any): [any, any] {
    throw new Error('Method not implemented.');
  }
  public readonly descripcion: string;
  public readonly fecha_inicio: string;
  public readonly estado: string;

  constructor(descripcion: string, fecha_inicio: string, estado: string) {
    this.descripcion = descripcion;
    this.fecha_inicio = fecha_inicio;
    this.estado = estado;
  }
}
