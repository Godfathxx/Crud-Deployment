
const express = require("express");
const mongoose = require("mongoose");
const petRoute = require("./controller/petRoute");
const consumerRoute = require("./controller/consumerRoute");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();



mongoose.set("strictQuery",true); //Depercation Warning //To supress the warning
mongoose.connect("mongodb+srv://user1:12345@cluster0.hbxb7a5.mongodb.net/petdb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/petRoute",petRoute);
app.use("/consumerRoute",consumerRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000")


});