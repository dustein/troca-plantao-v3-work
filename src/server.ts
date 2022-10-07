import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.get('/', (req, res) => {
   res.json({message: "pasta raiz"})
});

app.get('/users', async (req, res) => {

   const listaUsers = await prisma.user.findMany();

   res.status(200).send(listaUsers)
})

app.get('/jobs', async (req, res) => {

   const listaJobs = await prisma.job.findMany();

   res.status(200).send(listaJobs)
})


app.listen(3030, () => { console.log('Servidor OK porta 3030')})