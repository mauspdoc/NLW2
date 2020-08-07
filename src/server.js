// express return a function
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Configurantion for nunjucks
nunjucks.configure('src/views', {
  express: server,
  noCache: true, // Good for development
});

// Path to static files
server.use(express.static('public'));

const { subjects, weekdays, getSubject } = require('./utils/format');
const proffys = require('./database/fake_data.js');
// #Pages
// req --> "client"
// resp --> "response from server"
const pageLanding = function pageLanding(req, resp) { resp.render('index.html'); };
const pageStudy = function pageStudy(req, resp) {
  const filters = req.query; // querystring from request
  resp.render('study.html', {
    proffys, filters, subjects, weekdays,
  });
};
const pageGiveClasses = function pageGiveClasses(req, resp) {
  const data = req.query;
  const dataLength = Object.keys(data).length;
  const isDataEmpty = dataLength === 0; // Check if has some name
  const isDataValid = dataLength === 9;

  if (!isDataEmpty && isDataValid) {
    data.subject = getSubject(data.subject);
    proffys.push(data);
    return resp.redirect('/study');
  }
  return resp.render('give-classes.html', { subjects, weekdays });
};

// Routes
server.get('/', pageLanding);
server.get('/study', pageStudy);
server.get('/give-classes', pageGiveClasses);

// Listen port
server.listen(5500);
