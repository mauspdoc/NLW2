const proffys = [
  {
    name: 'Diego Fernandes',
    avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
    whatsapp: '899183921',
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject: 'Química',
    cost: '20',
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: 'Daniele Evangelista',
    avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
    whatsapp: '899183921',
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject: 'Matemática',
    cost: '20',
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: 'Mayk Brito',
    avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
    whatsapp: '899183921',
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject: 'Matemática',
    cost: '20',
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
];
const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
];

const getSubject = function getSubjectById(subjectIdNumber) {
  const indexInArray = Number(subjectIdNumber) - 1;
  return subjects[indexInArray];
};

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
