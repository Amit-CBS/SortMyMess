const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'members'
    },

    item:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
const data = mongoose.model('data', dataSchema);
module.exports = data;