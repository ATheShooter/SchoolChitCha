const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const multer = require('multer')
const upload = multer({dest: './uploads'})

var User = require('../models/user');




router.get('/userview', (req, res, next) => {

	
		// var user = User.find('ahmed')
     
	res.render('userview', {user: "user"});
  
})


router.get('/login', (req, res, next) => {

	res.render('login', {title: 'login'});
})

  
router.post('/registerUser', (req, res, next) => {

    
    var Username = req.body.Username;
    var password = req.body.password;
    var email = req.body.email;
     

   // Form validatior
   
   req.checkBody('email', 'email field  is required').notEmpty();
   req.checkBody('email', 'email field  is required').isEmail();
   req.checkBody('Username', 'UserName field  is required').notEmpty();
   req.checkBody('password', 'password field  is required').notEmpty();
   req.checkBody('password2', 'password field  is required').equals(req.body.password);
   

   
   //check Errors
   var errors = req.validationErrors();

   

   if(errors){
   	console.log("Errors")
   } else {

   	var newUser = new User({
      
      email: email,
      username: Username,
      password:password,
      sem: sem,
      module: Module
    })

    User.createUser(newUser, function(err, user){
      if(err) throw err
        console.log(user)
    })

    req.flash('success', 'you are now registered');

    res.location('/')
    res.redirect('/')

   }



})





module.exports = router
 