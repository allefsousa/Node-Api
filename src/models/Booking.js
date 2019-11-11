const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
   date:String,
   approved:Boolean,

   /**
    * Referenciando o usuario que realizou a reserva
    */

   user:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User' 
    },


   /**
    * Referenciando o Spot que o usuari oesta querendo reservar
    */

   spot:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Spot' 
    }

});

module.exports = mongoose.model('Booking',BookingSchema)