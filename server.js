var express = require('express');
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var config = require ("./config");
var app = new express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.listen(config.port,function(err){
   if(err){
       console.log(err);
   }
   else{
       console.log("listenig on port 3000");
   }
});


