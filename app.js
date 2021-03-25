const express = require('express');
const port = 3002;
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

/*
app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send({message: 'Node.js and Express REST API'});
});
*/

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
