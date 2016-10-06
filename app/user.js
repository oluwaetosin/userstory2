

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema  = new schema({
    name : 'String',
    username : {type: String, required:true, index:{unique:true}},
    passowrd: {type: String,select:false,required:true}
});

module.exports = mongoose.model('User',userSchema);
