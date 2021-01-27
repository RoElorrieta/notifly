const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const airportsSchema = new Schema ({
    name: {String, required: true},
    country: {String, required: true},
    IATAcode: {String, required: true},
    base: Boolean
});

const Airport = mongoose.model('airport', airportsSchema);
module.exports = Airport;