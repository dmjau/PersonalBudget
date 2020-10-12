const mongoose = require('mongoose');
const {Schema} = mongoose;

//this is the schema to save the data in the DB
const RegisterSchema = new Schema({
    concept: { type: String, required: true },
    amount: { type: Number, require: true },
    dateYear: { type: Number, require: true },
    dateMonth: { type: Number, require: true },
    dateDay: { type: Number, require: true },
    kind: { type: String, require: true },
    category: { type: String }
});

module.exports = mongoose.model('Register', RegisterSchema);
