const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* GET ALL CUSTOMERS */

app.get("/customers",(req,res)=>{

    const sql = "SELECT * FROM Customers";

    db.query(sql,(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result);
        }
    });

});

/* ADD CUSTOMER */

app.post("/customers",(req,res)=>{

    const {name,email,phone} = req.body;

    if(!name || !email){
        return res.status(400).send("Missing fields");
    }

    const sql = "INSERT INTO Customers(name,email,phone) VALUES(?,?,?)";

    db.query(sql,[name,email,phone],(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.send("Customer Added Successfully");
        }
    });

});

/* UPDATE CUSTOMER */

app.put("/customers/:id",(req,res)=>{

    const id = req.params.id;
    const {name,email,phone} = req.body;

    const sql = "UPDATE Customers SET name=?,email=?,phone=? WHERE id=?";

    db.query(sql,[name,email,phone,id],(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.send("Customer Updated");
        }
    });

});

/* DELETE CUSTOMER */

app.delete("/customers/:id",(req,res)=>{

    const id = req.params.id;

    db.query("DELETE FROM Customers WHERE id=?",[id],(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.send("Customer Deleted");
        }
    });

});

/* GET PRODUCTS */

app.get("/products",(req,res)=>{

    db.query("SELECT * FROM Products",(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result);
        }
    });

});

/* PLACE ORDER */

app.post("/orders",(req,res)=>{

    const {customer_id,product_id,quantity} = req.body;

    const sql = "INSERT INTO Orders(customer_id,product_id,quantity) VALUES(?,?,?)";

    db.query(sql,[customer_id,product_id,quantity],(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.send("Order Placed Successfully");
        }
    });

});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});