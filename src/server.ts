import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.get('/', (req, res) => {
   res.json({message: "pasta raiz"})
});



app.listen(3030, () => { console.log('Servidor OK porta 3030')})