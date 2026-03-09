const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/students",(req,res)=>{

    db.query("SELECT * FROM students",(err,result)=>{
        if(err){
            res.status(500).json(err);
        } else{
            res.json(result);
        }
    });

});

router.post("/students",(req,res)=>{

    const {id,name,email,department} = req.body;

    const sql = "INSERT INTO students (id,name,email,department) VALUES (?,?,?,?)";

    db.query(sql,[id,name,email,department],(err,result)=>{
        if(err){
            res.status(500).json(err);
        } else{
            res.json({message:"Student Added"});
        }
    });

});

module.exports = router;