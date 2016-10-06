var express = require('express');
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var config = require ("./config");
var mongoose = require("mongoose");
mongoose.connect(config.database,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
});
var app = new express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var api = require('./app/routes/api')(app,express);
app.use('/api',api)
app.get("/",function(req,res){
   res.sendFile(__dirname + "/public/views/index.html"); 
});
app.listen(config.port,function(err){
   if(err){
       console.log(err);
   }
   else{
       console.log("listening on port 3000");
   }
});


