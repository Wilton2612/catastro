import {InputType, Field, Float, Int} from "type-graphql";
import { Min } from "class-validator";




@InputType()
export class PredioInput {
  
  @Field(() => Int)
  numero_predial!: number;

  @Field(() => Float  )
  @Min(0, { message: "evaluo debe ser mayor que 0" })
  evaluo!: number;

  @Field()
  nombre!: string;

  @Field()
  departamento!: string;

  @Field()
  municipio!: string;

  
}



@InputType()
export class PredioUpdateInput {
  
  @Field(() => Int, {nullable: true})
  numero_predial?: number;

  @Field(() => Float, {nullable: true} )
  @Min(0, { message: "evaluo debe ser mayor que 0" })
  evaluo?: number;

  @Field({nullable: true})
  nombre?: string;

  @Field({nullable: true})
  departamento?: string;

  @Field({nullable: true})
  municipio?: string;

  
}