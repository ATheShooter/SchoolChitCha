const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


var Instructor = require('../models/instructor')

router.get('/instructorview', (req, res, next) => {

	// var instructor = 

	res.render('instructorview',{instructor: "instructor"});
	})



 router.get('/instRegister', (req, res, next) => {

 	var name = req.body.name;
 	var email = req.body.email;
    var sem = req.body.sem;
    var Module = req.body.moduld;


    req.checkBody('name', 'Name field  is required').notEmpty();
    req.checkBody('email', 'email field  is required').notEmpty();
    req.checkBody('email', 'email field  is required').isEmail();
    req.checkBody('sem', 'Semsiter field  is required').notEmpty();
    req.checkBody('module', 'module field is require ').notEmpty();


    var errosr = req.validationErrors();

    if(errosr){
    	console.log("Errors")
    } else {

    	var newInstructor = new Instructor({


    		  email: email,
		      name: name,
		      sem: sem,
		      module: Module
    	})


    	Instructor.createInstructor(newInstructor,function(err,instructor){
    		if(err) throw err
    			console.log(instructor)
    	})

	 req.flash('success', 'you are now registered');

	    res.location('/')
	    res.redirect('/')

   

    }

 })


module.exports = router