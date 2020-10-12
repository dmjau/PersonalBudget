//This file controls DB connection.
const mongoose = require ('mongoose');

//Middlewares
mongoose.promise = global.promise;

var URI = 'mongodb://localhost';

//Methods
async function conectar() {
    await mongoose.connect(
        URI, {useNewUrlParser: true, useUnifiedTopology: true}
    )
    console.log('DB is connected');
}
conectar();

module.exports = mongoose