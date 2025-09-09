const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({

    busId:{
        type : Number,
        required : true
    },
    busNo:{
        type : String,
        required : true,
        unique : true
    },
    capacity:{
        type : Number,
    },
  createdAt: {
    type : Date,
    default : Date.now 
  }

});

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;