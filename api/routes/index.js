// Se encarga solo del acceso y de enviar y recibir informacion
const express = require('express'); 

const notesRouter = require('./notes_router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/notes', notesRouter);
}

module.exports = routerApi;
