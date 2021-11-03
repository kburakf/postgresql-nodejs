"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var objection_1 = require("objection");
var config = require('./config');
var enviroment = process.env.NODE_ENV || 'development';
exports.default = (0, knex_1.default)(__assign(__assign({}, config[enviroment]), objection_1.knexSnakeCaseMappers));
//# sourceMappingURL=knex.js.map