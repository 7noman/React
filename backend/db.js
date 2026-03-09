const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Noman123ansari",
    database: "exam_ecommerce_d"
});

db.connect((err)=>{
    if(err){
        console.log("Database connection failed", err);
    }else{
        console.log("Connected to MySQL Database");
    }
});

module.exports = db;