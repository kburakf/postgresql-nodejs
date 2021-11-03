"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = require("body-parser");
var knex_1 = __importDefault(require("./src/database/knex"));
var objection_1 = require("objection");
var todos_1 = __importDefault(require("./src/routes/todos"));
objection_1.Model.knex(knex_1.default);
var app = (0, express_1.default)();
var port = 3001;
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.listen(port, function () {
    console.log("The port is running on '" + port + "'");
});
app.use('/todos', todos_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map