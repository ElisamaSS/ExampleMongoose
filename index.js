import express from 'express';
import banksRouter from './routes/banksRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//Conexão com o MongoDB
const app = express();

(async () => {
  try {
    console.log('Conectando ao MongoDB... ');
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@bootcamp2020.mdsjx.mongodb.net/bank?retryWrites=true&w=majority`,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log('Conectado com sucesso ao MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB. ' + error);
  }
})();

app.listen(process.env.PORT, () => console.log(`API iniciada`));

app.use(express.json());
app.use(banksRouter);
