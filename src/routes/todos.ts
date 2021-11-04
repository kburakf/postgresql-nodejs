import express from 'express';
import * as TodoController from '../controllers/todo';

const router = express.Router();

router.get('/:id', TodoController.getTodo);
router.get('/', TodoController.getTodos);
router.post('/', TodoController.createTodo);
router.patch('/:id', TodoController.updateTodo);
router.get('/:userId/user', TodoController.getUserTodos);
router.delete('/:id', TodoController.deleteTodo);

export default router;