
const mongoose = require("mongoose");
const consumerSchema = new mongoose.Schema({
    "Name":{type:String},
    "ID":{type:String},
    "Phone No.":{type:String},
    "Email-ID":{type:String},
    "Pet-Name":{type:String},
    "Breed":{type:String},
    "Service":{type:String},

    },{
        collection: "consumers"    
    
    })
    module.exports = mongoose.model("consumerSchema",consumerSchema);