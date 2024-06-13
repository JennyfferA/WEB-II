export class AnspiranteEntity {
  constructor(
    public id: number,
    public nombre: string,
    public identificacion: string,
    public estado: string
  ) {}

  public static fromObject(object: { [key: string]: any }): AnspiranteEntity {
    const { id, nombre, identificacion, estado, inscripciones } = object;

    if (!id) throw new Error('Id is required');
    if (!nombre) throw new Error('Nombre is required');
    if (!identificacion) throw new Error('Identificacion is required');
    if (!estado) throw new Error('Estado is required');
    if (!Array.isArray(inscripciones)) throw new Error('Inscripciones must be an array');

    
    return new AnspiranteEntity(id, nombre, identificacion, estado);
  }
}