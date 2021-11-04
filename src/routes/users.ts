import express from 'express';
import { UserModel } from '../database/models';
import { User } from './../types/user';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await UserModel
    .query()
    .findById(id);

  return user;
});

router.post('/', async (req, res): Promise<User> => {
  let { user } = req.body;

  user = await UserModel
    .query()
    .insert({ ...user })
    .returning('*');

  return user;
});

export default router;