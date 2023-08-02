import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity } from 'typeorm';
import { Predio } from './Predio';

@Entity()
export class Propietario extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ length: 50, nullable: false })
  direccion!: string;

  @Column({ length: 10, nullable: false })
  telefono!: string;

  @Column({ length: 100, nullable: false })
  correo!: string;

  @ManyToMany(() => Predio, (predio) => predio.propietario)
  predio!: Predio[];
}