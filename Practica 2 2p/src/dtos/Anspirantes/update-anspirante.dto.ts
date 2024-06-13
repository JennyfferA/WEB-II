export class UpdateAnspiranteDto {
  static create(arg0: any): [any, any] {
    throw new Error('Method not implemented.');
  }
  public readonly id: number;
  public readonly nombre?: string;
  public readonly identificacion?: string;
  public readonly estado?: string;

  constructor(id: number, nombre?: string, identificacion?: string, estado?: string) {
    this.id = id;
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.estado = estado;
  }
}