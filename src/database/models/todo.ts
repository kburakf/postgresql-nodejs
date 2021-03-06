import { Model } from 'objection';

export default class Todo extends Model {
  static get tableName() {
    return 'todos';
  }

  id!: string;
  user_id!: string;
  title!: string;
  done!: boolean;
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