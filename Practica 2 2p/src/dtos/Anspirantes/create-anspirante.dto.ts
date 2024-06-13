export class CreateAnspiranteDto {
  static create(body: any): [any, any] {
    throw new Error('Method not implemented.');
  }
  public readonly nombre: string;
  public readonly identificacion: string;
  public readonly estado: string;

  constructor(nombre: string, identificacion: string, estado: string) {
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.estado = estado;
  }
}
