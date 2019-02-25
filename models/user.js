var mongoose = require('mongoose');
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

//user schema

var UserSchema = new Schema({
    username: {
    	type: String,
    	indext: true
    },
    password:{
    	type:String,
        required: true
    },
	  
	email: {
	     	type: String,
	        required: true
	     },
	    
});


 module.exports = mongoose.model('User',UserSchema);

module.exports.createUser =  function(newUser, callback){
   newUser.save(callback)
}