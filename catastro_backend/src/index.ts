import 'reflect-metadata';
import {main} from './server';

async function app() {

    const apps =  await  main();
    apps.listen(3000);
    console.log('Server on port 3000');
}

app();