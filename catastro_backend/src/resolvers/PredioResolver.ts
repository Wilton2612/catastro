import { Resolver, Query, Mutation, Arg, Int} from "type-graphql";
import { Predio } from "../entity/Predio";
import { PredioInput } from "../inputs/PredioInput";
import { PredioUpdateInput } from "../inputs/PredioInput";
import { TerrenoInput } from "../inputs/TerrenoInput";
import { Terreno } from "../entity/Terreno";


@Resolver()
export class PredioResolver {

    @Query(() => Terreno)
    async createPredioTerreno(
        @Arg("data" ) data: PredioInput,
        @Arg("terreno" ) terreno: TerrenoInput,
    )
    {
        const newPredio = new Predio();
        Object.assign(newPredio, terreno);
        await newPredio.save();

        const newTerreno = new Terreno();
        Object.assign(newTerreno, data);
        newTerreno.predio = newPredio;
        await newTerreno.save();
        return newTerreno;
    }




    @Mutation(() => Predio)
    async createPredio(
        @Arg("data" ) data: PredioInput,


    ){  
        const newPredio = new Predio();
        Object.assign(newPredio, data);
        await newPredio.save();
        return newPredio;
    }

    
    @Mutation(() => Boolean)
    async deletePredio(@Arg("id", () => Int) id: number) {
        await Predio.delete(id);
        return true;
    }


    
    @Mutation(() => Boolean)
    async updatePredio(

        @Arg("id") id: number,
        @Arg("data" ) data: PredioUpdateInput,
    ){

        await Predio.update({id},data);
        return true;
    }
    
    @Query(() => [Predio])
    async predios() {

        return await Predio.find();

    }


}