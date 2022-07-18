const express = require('express')
const Post = require("../model/Post")
const Customer  = require("../model/Customer")
const Identifier = require("../model/Identifier")


exports.displayData = async (req, res) => {
    try{
            const posts = await Post.find()
            res.json(posts)
    }catch(err){
        message:err
    }
}

exports.saveData = async (req, res) => {

    const dataB = new Post({
        name : req.body.name,
        phone : req.body.phone
    })

    try{
        const saveT = await dataB.save()
        res.json(saveT);
    }catch(err){
        message:err
    }

}


exports.singleData = async (req, res) => {
    try{
        const data = await Post.findById(req.params.postId);
        res.json(data);

    }catch(err){
        message:err
    }
}

exports.update = async (req, res) => {
    try{
        const data = await Post.updateOne(
           { _id: req.params.postId},
           { $set: { name: req.body.name,
        phone: req.body.phone }
            
           }
        );
           res.json(data)
    }catch(err){
        message:err
    }
}


exports.deleteData = async (req, res) => {
    try{
        const data = await Post.remove({ _id: req.params.postId});
        res.json(data)
    }catch(err){
        message: err
    }
}



exports.customer = async (req, res) => {

    const dataB = new Customer({
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender
    })

    try{
        const saveT = await dataB.save()
        res.json(saveT);
    }catch(err){
        message:err
    }

}


exports.identifier = async (req, res) => {

    const dataB = new Identifier({
        cardcode : req.body.cardcode,
        customer : req.params.postId
    })

    try{
        const saveT = await dataB.save()
        res.json(saveT);
    }catch(err){
        message:err
    }

}

exports.getCustomer = async (req, res) => {
    
    try{
    const data = await Identifier.findById(req.params.postId)
      .populate("customer")

      res.json(data)
    }catch(err){
        message:err
    }
      
  };
