import express from 'express';
import Accounts from '../models/Accounts.js';

const router = express.Router();

router.get('/contas', async (request, response) => {
  const accounts = await Accounts.find({});
  try {
    response.send(accounts);
    //return response.json({ accounts });
  } catch (err) {
    response.status(500).send(err);
  }
});

export default router;
