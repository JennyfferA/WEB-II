export class CursoEntity {
  constructor(
    public id: number,
    public descripcion: string,
    public fecha_inicio: string,
    public estado: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): CursoEntity {
    const { id, descripcion, fecha_inicio, estado, inscripciones } = object;

    if (!id) throw new Error('Id is required');
    if (!descripcion) throw new Error('Descripcion is required');
    if (!fecha_inicio) throw new Error('Fecha_inicio is required');
    if (!estado) throw new Error('Estado is required');
    if (!Array.isArray(inscripciones)) throw new Error('Inscripciones must be an array');


    return new CursoEntity(id, descripcion, fecha_inicio, estado);
  }
}