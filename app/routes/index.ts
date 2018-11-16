import noteRoutes from './note_routes';


const routes= function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};

export default routes;