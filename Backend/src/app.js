import express from 'express';
import cors from 'cors';
import RouteEntregador from './Routes/RouteEntregador.js';

const app = express();

app.use(express.json());
app.use(cors());


//app.get("/", (request, response)=>response.status(200).send(db.executaComando()))
app.use('/entregador', new RouteEntregador().getRouter());
export default app;