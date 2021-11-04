import { Request, RequestHandler } from 'express';

import * as TodoService from './../services/todo';

export const getTodo: RequestHandler = async (request: Request) => {
  const { id } = request.params;
  return TodoService.getTodo(id);
};

export const getTodos: RequestHandler = async () => {
  return TodoService.getTodos();
};

export const createTodo: RequestHandler = async (request: Request) => {
  const { todo: { title, userId } } = request.body;
  return TodoService.createTodo(title, userId);
};

export const updateTodo: RequestHandler = async (request: Request) => {
  const { id } = request.params;
  const { todo: { title, done } } = request.body;
  return TodoService.updateTodo(id, title, done);
};

export const getUserTodos: RequestHandler = async (request: Request) => {
  const { userId } = request.params;
  return TodoService.getUserTodos(userId);
};

export const deleteTodo: RequestHandler = async (request: Request) => {
  const { id } = request.params;
  return TodoService.deleteTodo(id);
};