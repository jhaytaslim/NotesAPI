import noteRoutes = require('./note_routes');


export const routes = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};