// src/entity/Construccion.ts
import { Entity, PrimaryGeneratedColumn, Column, Check, ManyToOne, BaseEntity } from 'typeorm';
import { Predio } from './Predio';

@Entity()
export class Construccion extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Check('numero_pisos_check', 'numero_pisos > 0')
  @Column({type: 'int', nullable: false})
  numero_pisos!: number;

  @Check('area_total_check', 'area_total > 0')
  @Column({ type: 'float', nullable: false })
  area_total!: number;

  @Check('tipo_construccion_check', 'tipo_construccion IN (\'Industrial\', \'Comercial\', \'Residencial\')')
  @Column({ length: 100, nullable: false })
  tipo_construccion!: string;

  @Column({ length: 50, nullable: false })
  direccion!: string;

  @ManyToOne(() => Predio, (predio) => predio.construccion)
  predio!: Predio;


}

