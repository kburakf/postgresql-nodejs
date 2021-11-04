import { Model } from 'objection';

export default class User extends Model {
  static get tableName() {
    return 'users';
  }

  id!: string;
  name!: string;
  surname!: string;
  age!: string;
  created_at!: string;
  updated_at!: string;

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  };

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  };
};