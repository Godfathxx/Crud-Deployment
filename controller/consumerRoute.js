
const express = require('express');
const consumerSchema = require('../model/consumerSchema');
const { mongo, default: mongoose } = require('mongoose');
const app = express();
const consumerRoute = express.Router();

consumerRoute.post("/create-consumer",(req,res)=>{
    consumerSchema.create(req.body,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})
consumerRoute.get("/",(req,res)=>{
    consumerSchema.find((err,data)=>{

        if(err)
            return err
        else
            res.json(data);
    })


})
consumerRoute.route("/update-consumer/:id")
.get((req,res)=>{
    consumerSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err
        else
            res.json(data);       
})
}).put((req,res)=>{
    consumerSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })

})
consumerRoute.delete("/delete-consumer/:id",(req,res)=>{
    petSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

module.exports = consumerRoute;