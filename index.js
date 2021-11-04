"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const knex_1 = __importDefault(require("./src/database/knex"));
const objection_1 = require("objection");
const todos_1 = __importDefault(require("./src/routes/todos"));
const users_1 = __importDefault(require("./src/routes/users"));
objection_1.Model.knex(knex_1.default);
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use('/todos', todos_1.default);
app.use('/users', users_1.default);
app.listen(port, () => {
    console.log(`The port is running on '${port}'`);
});
exports.default = app;
//# sourceMappingURL=index.js.map