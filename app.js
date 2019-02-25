const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express');
const uuid = require('uuid/v4')
const session = require('express-session')
const passport = require('passport')
const expressValidator = require('express-validator')
const LocalStrategy = require('passport-local')
const multer = require('multer')
const upload = multer({dest: './uploads'})
const flash = require('connect-flash') 
const mongo = require('mongodb')
const mongoose = require('mongoose')
 
const db = mongoose.connection;

const app = vertex.express() // initialize app

mongoose.connect('mongodb://localhost/instructor');
mongoose.connect('mongodb://localhost/nodeauth');






 //handle session 
 app.use(session({
 	secret:'secret',
 	saveUnintialized: true,
 	resave: true
 }))

 //passport
 app.use(passport.initialize())
 app.use(passport.session())

 app.use(expressValidator({
 	errorFormatter: function(param, msg, value){
 	var namespace = param.split('.')
 	, root = namespace.shift()
 	,fromParam = root;

 	while(namespace.length){
 		fromParam += '[' + namespace.shift() + ']' ;
 	}

 	return {

 		param : fromParamm,
 		msg   : msg,
 		value : value
 	};
 }
 }))


 app.use(require('connect-flash')());
 app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// import routes
const index = require('./routes/index')
const users = require('./routes/users')
const api = require('./routes/api')



// set routes
app.use('/', index)
app.use('/users', users) 

module.exports = app