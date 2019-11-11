const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
    thumbnail:String,
    company:String,
    price:Number,
    techs:[String],
    // fazendo referencia ao id do usuario que criar o spot e informando quan a referencia do ID 
    user:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot',SpotSchema)