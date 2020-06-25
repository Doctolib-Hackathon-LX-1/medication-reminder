require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const connection = require('./config');

app.use(morgan('dev'));
app.use(express.json())

connection.connect(err => {
    err ?
        console.log(err)
        :
        console.log('You are successfully connected to the database!')
})

// implement the API part
app.get("/api", (req, res) => {
    res.send("Hello World");
})

app.post("/newmedication", (req, res) => {

const reccurenceRule = req.body;

    connection.query('INSERT INTO medication (Subject, StartTime, EndTime, RecurrenceRule, OwnerColor) VALUES  ?'
    , [reccurenceRule], (err, results) => {
        if (err) {
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