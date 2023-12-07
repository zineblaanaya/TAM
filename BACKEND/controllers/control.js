const express = require('express')

exports.inscription = async (req,res) => {
    console.log("pat");
    
    res.send(req.body.firstName);
    
}
exports.connexion = (req,res) => {
    res.send("connexion")
}
