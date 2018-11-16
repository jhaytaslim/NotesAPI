"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_routes_1 = require("./note_routes");
const routes = function (app, db) {
    note_routes_1.default(app, db);
    // Other route groups could go here, in the future
};
exports.default = routes;
//# sourceMappingURL=index.js.map