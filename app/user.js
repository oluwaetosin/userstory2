

var mongoose = require("mongoose");
var schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var userSchema  = new schema({
    name : 'String',
    username : {type: String, required:true, index:{unique:true}},
    password: {type: String,select:false,required:true}
});
userSchema.pre('save',function(next){
   var user = this;
   if(!user.isModified('passpword')) return next();
   bcrypt.hash(user.password,null,null,function(err,hash){
       if(err){
           return next(err);
       }
       user.password = hash;
       next();
   });
});
module.exports = mongoose.model('User',userSchema);
