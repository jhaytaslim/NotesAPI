"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noteRoutes = require("./note_routes");
exports.routes = function (app, db) {
    noteRoutes(app, db);
    // Other route groups could go here, in the future
};
//# sourceMappingURL=index.js.map