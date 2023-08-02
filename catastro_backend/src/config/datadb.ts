import { DataSource } from "typeorm";
import path from "path";

export function startDB() {

    const AppDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "catastro",
        synchronize: true,
        //dropSchema: true,
        logging: true,
        entities: [ path.join(__dirname, "../entity/**/**.ts")],
        
    });

    AppDataSource.initialize()
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err: any) => console.log(err));


}


