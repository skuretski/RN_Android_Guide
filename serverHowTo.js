var express = require('express');
var app = express();
var router = require('express').Router();
var path = __dirname + '/views/';

router.get('/', function(req, res, next){
	res.sendFile(path + 'index.html');
});

router.get('/basic', function(req, res, next){
	res.sendFile(path + 'basic.html');
});

router.get('/navExp', function(req,res,next){
	res.sendFile(path + 'navExp.html');
});

router.get('/back', function(req, res, next){
	res.sendFile(path + 'back.html');
});

router.get('/nav', function(req,res,next){
	res.sendFile(path + 'nav.html');
});


app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.use("*", function(req,res,next){
	res.sendFile(path + '404.html');
});
app.listen(8086, function(){
	console.log('Express started on port 8086');
});