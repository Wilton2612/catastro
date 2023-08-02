import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PredioResolver } from './resolvers/PredioResolver';
import { buildSchema } from "type-graphql";
import { startDB } from './config/datadb';

export async function main() {
    startDB();

    const app = express();
   
    const servers = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PredioResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    });

    await servers.start();
    servers.applyMiddleware({ app, path: '/api' });

  

    return app;
}



