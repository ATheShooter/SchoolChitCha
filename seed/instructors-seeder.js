var Instructor  = require('../models/instructor');

var mongoose = require('mongoose');

const db = mongoose.connection;

var instructors = [
	
	 new Instructor({

	imagePath: "images/limkokwing3.jpg",
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
}),

 new Instructor({

	imagePath: "images/limkokwing3.jpg",
	
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
}),


  new Instructor({

	imagePath: "images/limkokwing3.jpg",
	Instructorname:"ahmed",
	password: "0000",
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
}),

   new Instructor({

	imagePath: "images/limkokwing3.jpg",
	Instructorname:"ahmed",
	password: "0000",
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
}),


    new Instructor({

	imagePath: "images/limkokwing3.jpg",
	Instructorname:"ahmed",
	password: "0000",
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
}),

     new Instructor({

	imagePath: "images/limkokwing3.jpg",
	Instructorname:"ahmed",
	password: "0000",
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
}),

      new Instructor({

	imagePath: "images/limkokwing3.jpg",
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
}),


       new Instructor({

	imagePath: "images/limkokwing3.jpg",
	
	email:"lookingto@outlook.com",
	name:"ahmed ali",
	sem:"5",
	module:"math",
	score: 0
})

	 ];



	 var done = 0
	 for (var i = 0; i < instructors.length; i++){

	 	instructors[i].save( function(err,result){
	 		done++
	 		if(done === instructors.length){
	 			exit();
				

	 	}

	 });
	 }

	function exit(){

	 mongoose.disconnect()
	}


