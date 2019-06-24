const express = require('express');
const hbs = require('hbs');
const app = express();
const mongoose = require('mongoose')

const Player = require('./models/Player.js');

mongoose.connect('mongodb://localhost/nba'); 

// When successfully connected
mongoose.connection.on('connected', () => {  
  console.log('Mongoose default connection open');
}); 

// If the connection throws an error
mongoose.connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {  
  mongoose.connection.close(() => { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

app.use(express.static('public'));

app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  res.render('index');
});


app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});