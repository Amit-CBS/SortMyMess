const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    messid1:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

const Member = mongoose.model('Member', UserSchema);

module.exports = Member;
