var express = require('express');
var app = express();
var { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000); // defined port use to connect

//Middlewares
app.use(express.json()); //use this middleware for received json 

//Routes
app.use(require('./routes/register.routes'));

//Starting server on port defined on Setting
app.listen(app.get('port'), function(){
    console.log("Server on port", app.get('port'))
});