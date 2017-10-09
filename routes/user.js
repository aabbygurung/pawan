var express = require('express');
var router = express.Router();  //predefined function that returns the reference of all our api's

router.get('/Show', function(req, res){
console.log('Default root is called');
res.end();
});

router.get('/', function(req, res){
res.render('index.html');
});


module.exports=router;