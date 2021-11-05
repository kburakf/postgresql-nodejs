import { Request } from 'express';
import * as UserService from '../services/user';

export const createUser = async (request: Request) => {
  const { user } = request.body;
  return UserService.createUser(user);
}

export const getUser = async (request: Request) => {
  const { id } = request.params;
  return UserService.getUser(id);
};