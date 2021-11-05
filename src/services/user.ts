import { UserModel } from '../database/models';


export const createUser = async (user: object) => {
  return UserModel
    .query()
    .insert({ ...user })
    .returning('*');
}

export const getUser = async (id: string) => {
  return UserModel.query().findById(id);
};

