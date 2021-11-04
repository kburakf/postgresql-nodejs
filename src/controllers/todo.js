"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const TodoService = __importStar(require("./../services/todo"));
const getTodo = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    return TodoService.getTodo(id);
});
exports.getTodo = getTodo;
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    return TodoService.getTodos();
});
exports.getTodos = getTodos;
const createTodo = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { todo: { title, userId } } = request.body;
    return TodoService.createTodo(title, userId);
});
exports.createTodo = createTodo;
const updateTodo = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { todo: { title, done } } = request.body;
    return TodoService.updateTodo(id, title, done);
});
exports.updateTodo = updateTodo;
const getUserTodos = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = request.params;
    return TodoService.getUserTodos(userId);
});
exports.getUserTodos = getUserTodos;
const deleteTodo = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    return TodoService.deleteTodo(id);
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todo.js.map