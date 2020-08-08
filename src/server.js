// express return a function
const express = require('express');
const nunjucks = require('nunjucks');
const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require('./pages');

const server = express();

// Configurantion for nunjucks
nunjucks.configure('src/views', {
  express: server,
  noCache: true, // Good for development
});

// Allow receive data from req.body
server.use(express.urlencoded({ extended: true }));

// Path to static files
server.use(express.static('public'));

// Routes
server.get('/', pageLanding);
server.get('/study', pageStudy);
server.get('/give-classes', pageGiveClasses);
server.post('/save-classes', saveClasses);
// Listen port
server.listen(5500);
