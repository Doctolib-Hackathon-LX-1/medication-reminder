require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const connection = require('./config');

app.use(morgan('dev'));
app.use(express.json());

connection.connect((err) => {
  err
    ? console.log(err)
    : console.log('You are successfully connected to the database!');
});

// implement the API part
app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.get('/medication', (req, res) => {
  connection.query('SELECT * FROM medication', (err, results) => {
    err
      ? res.status(500).send('Error retrieving data')
      : res.status(200).json(results);
  });
});

// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
