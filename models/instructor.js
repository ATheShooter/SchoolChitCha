var mongoose = require('mongoose');
var Schema = mongoose.Schema 

mongoose.connect('mongodb://localhost/instructor', {useNewUrlParser: true})

var db = mongoose.connection;


var instructorSchema = new Schema({

	 email: {
     	type: String,
        required: true
     },
     name: {
     	type: String,
        required: true
     },
     sem: {
     	type: String,
        required: true
     },
     module:{
     	type: String,
        required: true
     },
     score: {
      type: String,
      required: true
     },
     image:{
     	type: String,
        required: true,
     }
})

module.exports = mongoose.model('Instructor', instructorSchema );

module.exports.createInstructor =  function(newInstructor, callback){
   newInstructor.save(callback)
}