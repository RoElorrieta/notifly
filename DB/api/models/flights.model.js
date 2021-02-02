const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const flightSchema = new Schema ({
    date : {
        type: Number, 
        required: true
    },
    code : {
        type: String, 
        required: true
    },
    route : [{
        type: String,
    }],
    length : {
        type: String, 
        required: true
    },
    fleet : {
        type: String, 
        required: true
    },
    registration : {
        type: String, 
        required: true
    },
    PAX : {
        type: Number, 
        required: true
    }
});

const Flight = mongoose.model('flight', flightSchema);
module.exports = Flight;