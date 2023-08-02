import { Entity, PrimaryGeneratedColumn, Column, Check, OneToOne, OneToMany, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { Field, Float, Int, ObjectType } from 'type-graphql';
import { Terreno } from './Terreno';
import { Construccion } from './Construccion';
import { Propietario } from './Propietario';




@ObjectType()
@Entity()
export class Predio extends BaseEntity{

  @Field()
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Field(() => Int)
  @Column({ unique: true, nullable: false })
  numero_predial!: number;

  @Field( () => Float)
  @Check('evaluo_check', 'evaluo > 0')
  @Column({ type: 'float', nullable: false })
  evaluo!: number;

  @Field()
  @Column({ length: 100, nullable: false })
  nombre!: string;

  @Field()
  @Column({ length: 50, nullable: false })
  departamento!: string;

  @Field()
  @Column({ length: 50, nullable: false })
  municipio!: string;



  //Relaciones entre entidades
  //@Field(() => Terreno)
  @OneToOne(() => Terreno, (terreno) => terreno.predio)
  terreno!: Terreno;

  @OneToMany(() => Construccion, (construccion) => construccion.predio)
  construccion!: Construccion[];

  @ManyToMany(() => Propietario, (propietario) => propietario.predio)
  @JoinTable()
  propietario!: Propietario[];

}