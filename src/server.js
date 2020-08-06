const express = require('express');
// express return a function

const server = express();
server.use(express.static('public'));
// req --> "client"
// resp --> "response from server"
server.get('/', (req, resp) => resp.sendFile(`${__dirname}/views/index.html`));
server.get('/study', (req, resp) => resp.sendFile(`${__dirname}/views/study.html`));
server.get('/give-classes', (req, resp) => resp.sendFile(`${__dirname}/views/give-classes.html`));

// Listen port
server.listen(5500);
