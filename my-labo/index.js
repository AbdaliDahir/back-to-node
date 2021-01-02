const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to Db
mongoose.connect('mongodb://localhost/ninjaTest');
mongoose.Promise = global.Promise;

//Body Parser 
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// handlle Errors
app.use(function(err, req, res, next) {
  res.status(400).send({error: err.message});
})
app.get('/', (req, res) => {
  console.log("hello world");
  res.send({ name: "hello"});
})

//listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('now listenning for request');
})