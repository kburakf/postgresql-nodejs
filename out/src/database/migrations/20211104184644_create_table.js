"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.up = up;
;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('todos');
    });
}
exports.down = down;
;
//# sourceMappingURL=20211104184644_create_table.js.map