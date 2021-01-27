const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const flightSchema = new Schema ({
    date : {
        type: String, 
        required: true
    },
    code : {
        type: Number, 
        required: true
    },
    /*route : [
            {type: mongoose.Schema.Types.ObjectId, 
            ref : 'airports',
            required: true},
            {type: mongoose.Schema.Types.ObjectId, 
            ref : 'airports',
            required: true}
        ],*/
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