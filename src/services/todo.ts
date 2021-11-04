import { TodoModel } from '../database/models';


export const getTodo = async (id: string) => {
  const todo = await TodoModel.query().findById(id).first()
    .catch(err => console.log(err))

  return todo;
};

export const getTodos = async () => {
  const todos = await TodoModel.query().select().orderBy('created_at');

  return { todos };
};

export const createTodo = async (title: string, userId: string) => {
  const newTodo = await TodoModel.query()
    .insert({ title, user_id: userId })
    .returning('*');

  return { todo: newTodo };
};

export const updateTodo = async (title: string, done: boolean, id: string) => {
  const updatedTodo = await TodoModel.query()
    .update({ title, done })
    .where({ id })
    .returning('*')
    .first();

  return { todo: updatedTodo };
};

export const getUserTodos = async (userId: string) => {
  const todos = await TodoModel
    .query()
    .where({ user_id: userId })
    .returning('*')

  return { todos };
};

export const deleteTodo = async (id: string) => {
  await TodoModel.query().deleteById(id);

  return 'Todo successfully deleted.';
};