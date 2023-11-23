const mongoose = require("mongoose");
const petSchema = new mongoose.Schema(
  {
    Name: { type: String },
    EmailID: { type: String },
    PhoneNo: { type: String },
    Probleme: { type: String },
  },
  {
    collection: "pets",
  },
);
module.exports = mongoose.model("petSchema", petSchema);
