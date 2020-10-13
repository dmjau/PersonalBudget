var express = require('express');
var cors = require('cors');
var { mongoose } = require('./database');
var app = express();

//Settings
app.set('port', process.env.PORT || 3000); // defined port use to connect

//Middlewares
app.use(express.json()); //use this middleware for received json 
app.use(cors({origin: 'http://localhost:4200'})); //I use this middleware to communicate between servers (NODEJS and Angular)

//Routes
app.use('/api/register', require('./routes/register.routes'));

//Starting server on port defined on Setting
app.listen(app.get('port'), function(){
    console.log("Server on port", app.get('port'))
});