const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const adminSchema = new Schema ({
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
        unique: [
            true, 'This email is already registered'
        ]
    },
    password : {
        type: String, 
        required: true
    },
    //createdAt :{type: Timestamp}
});

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;