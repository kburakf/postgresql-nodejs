import express from 'express';
import { Todo } from '../database/models/todo';

const router = express.Router();

router.get('/', async (_, res) => {
  const todos = await Todo.query().select().orderBy('created_at');

  res.send({ todos });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.query().findById(id).first()
    .catch(err => console.log(err))

  res.send({ todo });
});

router.post('/', async (req, res) => {
  const { todo: { title } } = req.body;
  const newTodo = await Todo.query()
    .insert({ title })
    .returning('*');

  res.send({ todo: newTodo });
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { todo: { title, done } } = req.body;
  const updatedTodo = await Todo.query()
    .update({ title, done })
    .where({ id })
    .returning('*')
    .first();

  res.send({ todo: updatedTodo });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.query().deleteById(id);

  res.send('Todo successfully deleted.');
});

export default router;