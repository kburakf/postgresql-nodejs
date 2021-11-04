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
exports.deleteTodo = exports.getUserTodos = exports.updateTodo = exports.createTodo = exports.getTodos = exports.getTodo = void 0;
const models_1 = require("../database/models");
const getTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield models_1.TodoModel.query().findById(id).first()
        .catch(err => console.log(err));
    console.log(todo);
    return todo;
});
exports.getTodo = getTodo;
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield models_1.TodoModel.query().select().orderBy('created_at');
    return { todos };
});
exports.getTodos = getTodos;
const createTodo = (title, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = yield models_1.TodoModel.query()
        .insert({ title, user_id: userId })
        .returning('*');
    return { todo: newTodo };
});
exports.createTodo = createTodo;
const updateTodo = (title, done, id) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTodo = yield models_1.TodoModel.query()
        .update({ title, done })
        .where({ id })
        .returning('*')
        .first();
    return { todo: updatedTodo };
});
exports.updateTodo = updateTodo;
const getUserTodos = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield models_1.TodoModel
        .query()
        .where({ user_id: userId })
        .returning('*');
    return { todos };
});
exports.getUserTodos = getUserTodos;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield models_1.TodoModel.query().deleteById(id);
    return 'Todo successfully deleted.';
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todo.js.map