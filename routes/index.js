// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

 var Instructor = require('../models/instructor');

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res, next) => {

 
   Instructor.find(function(err, docs){
        var instructorChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            instructorChunks.push(docs.slice(i, i + chunkSize))
        }
        res.render('index', {instructor: docs});
    });
});




module.exports = router

