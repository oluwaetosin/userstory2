var express = require('express');
var morgan   = require('morgan');
var bodyParser = require('body-parser');

var app = new express();

app.listen('3000',function(err){
   if(err){
       console.log(err);
   }
   else{
       console.log("listenig on port 3000");
   }
});


