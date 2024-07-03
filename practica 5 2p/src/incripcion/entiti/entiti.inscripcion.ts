import { Column, Entity, PrimaryColumn, } from 'typeorm';

@Entity({ name: 'inscripciones' })
export class InscripcionEntiti {




      @PrimaryColumn()
      id: number

      @Column()
      idcurso: number


      @Column()
      idaspirante: number;


      @Column()
      fecha?: string;

      @Column()
      hora?: string;

      @Column()
      valor_cancelado: number;




}