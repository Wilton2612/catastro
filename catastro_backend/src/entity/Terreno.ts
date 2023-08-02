import { Entity, PrimaryGeneratedColumn, Column, Check, OneToOne, JoinColumn, BaseEntity} from 'typeorm';
import { Field, Float, ObjectType } from 'type-graphql'
import { Predio } from './Predio';

@ObjectType()
@Entity()
export class Terreno extends BaseEntity{

  @Field()
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Field(() => Float )
  @Check('area_check', 'area > 0')
  @Column({ type: 'float', nullable: false })
  area!: number;

  @Field(() => Float )
  @Column({ type: 'float', nullable: false })
  valor_comercial!: number;

  @Field()
  @Check('cerca_agua_check', 'cerca_agua IN (\'si\', \'no\')')
  @Column({ length: 10, nullable: false })
  cerca_agua!: string;

  @Field()
  @Check('tipo_terreno_check', 'tipo_terreno IN (\'Rural\', \'Urbano\')')
  @Column({ length: 50, nullable: false })
  tipo_terreno!: string;

  @Field()
  @Check('construccion_check', 'construccion IN (\'si\', \'no\')')
  @Column({ length: 50, nullable: false })
  construccion!: string;

  @Field(() => Predio)
  @OneToOne(() => Predio, (predio) => predio.terreno)
  @JoinColumn()
  predio!: Predio;



}
