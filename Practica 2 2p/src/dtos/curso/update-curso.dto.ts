export class UpdateCursoDto {
  static create(arg0: any): [any, any] {
    throw new Error('Method not implemented.');
  }
  public readonly id: number;
  public readonly descripcion?: string;
  public readonly fecha_inicio?: string;
  public readonly estado?: string;

  constructor(id: number, descripcion?: string, fecha_inicio?: string, estado?: string) {
    this.id = id;
    this.descripcion = descripcion;
    this.fecha_inicio = fecha_inicio;
    this.estado = estado;
  }
}