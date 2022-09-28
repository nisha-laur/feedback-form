//jshint esversion: 6

const express =require("express");
const bodyParser =require("body-parser");
const request  =require("request");


const app =express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(_dirname+"/signup.html");
})

app.post("/",function(req,res){
var firstName = req.body.fName;
var email = req.body.email;
var password = req.body.password;

console.log(firstName, email,password);

})

    app.listen(3000,function(){
        console.log("Server is running on port 3000");
    })
