const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    mail : {
        type: String,
        required: true,
        validate: {
            validator (value) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
            }
        },
        unique: [true, 'This email is already registered']
    },
    password: {
        type: String,
        required : true
    },
    checkname : {
        type: String,
        //required: true
    },
    checkID : {
        type: Number, 
        //required: true
    },
    rank: String,
    base : {
        type: String,
    },
    flights: [{type: mongoose.Schema.Types.ObjectId,
        ref: 'flight',
    }],
});

const User = mongoose.model('user', userSchema);
module.exports = User;