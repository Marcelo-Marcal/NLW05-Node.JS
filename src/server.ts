import express from 'express';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);


//Inicia o servido
app.listen(3333, () => console.log('Server is runnirng on port 3333'));
