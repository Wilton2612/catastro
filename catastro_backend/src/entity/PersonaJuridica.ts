// src/entity/PersonaJuridica.ts
import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Propietario } from './Propietario';

@Entity()
export class PersonaJuridica extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id!: number;
  
  @Column({ length: 100, nullable: false, unique: true })
  nit!: string;

  @Column({ length: 100, nullable: false })
  razon_social!: string;

  
  @OneToOne(() => Propietario)
  @JoinColumn()
  propietario!: Propietario;

}

