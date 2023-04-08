const express=require('express');
const mysql=require('mysql');
const doenv=require('dotenv');
const path = require("path");
const hbs = require("hbs");

const app=express();

doenv.config({
    path:'./.env',
});
//creating for the create account page
const db=mysql.createConnection({
host:process.env.DATABASE_HOST,
user:process.env.DATABASE_USER,
password:process.env.DATABASE_PASS,
database:process.env.DATABASE,
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("MySql connection success");
    }
});

app.use(express.urlencoded({extended:false}));

//console.log(__dirname)
const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.set("view engine" ,"hbs");

//routing all pages from pages.js to this main file
app.use("/",require("./routes/pages"));
app.use("/auth",require("./routes/auth"));

app.listen(420,()=>{
   console.log("sever started");
});

    app.use(express.urlencoded({extended:false}));

    