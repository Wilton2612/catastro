import {InputType, Field, Float, Int} from "type-graphql";
import { IsIn, Min } from "class-validator";



@InputType()
export class TerrenoInput {
  
  @Field(() => Float)
  @Min(0, { message: "area debe ser mayor que 0" })
  area!: number;

  @Field(() => Float  )
  valor_comercial!: number;

  @Field()
  @IsIn(["si", "no"], { message: "cerca_agua debe ser 'si' o 'no'" })
  cerca_agua!: string;

  @Field()
  @IsIn(["Rural", "Urbano"], { message: "tipo_terreno debe ser 'Rural' o 'Urbano'" })
  tipo_terreno!: string;

  @Field()
  @IsIn(["si", "no"], { message: "construccion debe ser 'si' o 'no'" })
  construccion!: string;

  
}
