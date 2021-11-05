"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class User extends objection_1.Model {
    static get tableName() {
        return 'users';
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
exports.default = User;
;
//# sourceMappingURL=user.js.map