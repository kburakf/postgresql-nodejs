"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class Todo extends objection_1.Model {
    static get tableName() {
        return 'todos';
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
    }
    ;
    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
    ;
}
exports.default = Todo;
;
//# sourceMappingURL=todo.js.map