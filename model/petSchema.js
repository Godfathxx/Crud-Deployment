
const mongoose = require("mongoose");
const petSchema = new mongoose.Schema({
    "Name": {type:String},
    "Breed": {type:String},
    "Vaccinated": {type:String},
    "Owner": {type:String},
    "Trained": {type:String},

    },{
        collection: "pets"    
    
    })
    module.exports = mongoose.model("petSchema",petSchema);