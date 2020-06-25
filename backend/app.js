require('dotenv').config();
const express = require('express');
const app = express();
const cron = require("node-cron");
const fs = require("fs");
const morgan = require('morgan');
const connection = require('./config');
const sendNodemailer = require('./nodemailer.js');

app.use(morgan('dev'));
app.use(express.json());

// schedule tasks to be run on the server  
// let getTime = "2020-06-28T22:59:00.000Z";
cron.schedule("* * * * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");

  let getTime = new Date();
  console.log(getTime);
  getTime.setMilliseconds(000);
  getTime.setHours( getTime.getHours() - 1);
  let hours = getTime.getHours();
  let year = getTime.getFullYear();
  let minutes = getTime.getMinutes();
  let month = getTime.getMonth() + 1 ;
  let day = getTime.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    
  let nowTime = `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;

  connection.query('SELECT * FROM medication WHERE StartTime = ?', [nowTime], (err, results) => {
    if (err) {
      console.log('Something went wrong.');
    } else {
      if (results.length > 0) {
        let queryResponse = Object(results);
        sendNodemailer(queryResponse[0].Subject);
      }
    }
  });
});


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


app.post("/newmedication", (req, res) => {

const reccurenceRule = req.body;

console.log('req.body', reccurenceRule)

    connection.query('INSERT INTO medication SET ?', [reccurenceRule], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error creating the new medication");
        } else {
            res.status(200).send("Medication Successfully added your calendar");        
        }
    });
})


// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
