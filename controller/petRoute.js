
const express = require('express');
const petSchema = require('../model/petSchema');
const { mongo, default: mongoose } = require('mongoose');
const app = express();
const petRoute = express.Router();


petRoute.post("/create-pet",(req,res)=>{
    petSchema.create(req.body,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})
petRoute.get("/",(req,res)=>{
    petSchema.find((err,data)=>{

        if(err)
            return err
        else
            res.json(data);
    })


})
petRoute.route("/update-pet/:id")
.get((req,res)=>{
    petSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err
        else
            res.json(data);       
})
}).put((req,res)=>{
    petSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})
petRoute.delete("/delete-pet/:id",(req,res)=>{
    petSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

module.exports = petRoute;