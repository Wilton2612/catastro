import { Entity, Column, Check, OneToOne, JoinColumn, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';
import { Propietario } from './Propietario';

@Entity()
export class PersonaNatural extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({type: 'bigint', nullable: false})
  documento!: number;

  @Column({ length: 10, nullable: false })
  @Check('tipo_documento_check', 'tipo_documento IN (\'Cédula ciudadanía\', \'Cédula extranjería\')')
  tipo_documento!: string;

  @Column({ length: 100, nullable: false })
  nombres!: string;

  @Column({ length: 100, nullable: false })
  apellidos!: string;

  @OneToOne(() => Propietario)
  @JoinColumn()
  propietario!: Propietario;

  
}
