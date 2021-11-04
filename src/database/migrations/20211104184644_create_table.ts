import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('users', (table) => {
      table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'));

      table
        .string('name')
        .notNullable();

      table
        .string('surname')
        .notNullable();

      table
        .integer('age')
        .notNullable();

      table
        .timestamp('created_at')
        .notNullable();

      table
        .timestamp('updated_at')
        .notNullable();
    })

    .createTable('todos', (table) => {
      table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'));

      table
        .uuid('user_id')
        .references('users.id');

      table.string('title')
        .notNullable();

      table.boolean('done')
        .notNullable()
        .defaultTo('false');

      table.timestamp('created_at')
        .notNullable();

      table.timestamp('updated_at')
        .notNullable();
    });
};


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('todos');
};

