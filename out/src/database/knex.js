"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const config = require('./config');
const enviroment = process.env.NODE_ENV || 'development';
exports.default = (0, knex_1.default)(Object.assign(Object.assign({}, config[enviroment]), objection_1.knexSnakeCaseMappers));
//# sourceMappingURL=knex.js.map