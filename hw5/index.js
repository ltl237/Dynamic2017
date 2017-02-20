var express = require('express');
var handlebars = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');


var app = express();
var db;

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'layouts')));

MongoClient.connect('mongodb://ltl237:megaman9@ds157559.mlab.com:57559/hw5_dynamic', function(err, database){
   if (err) return console.log(err); 
   db = database; 
   app.listen(process.env.PORT || 3000);
});



app.get('/', function(req, res){
	db.collection('players').find().toArray(function(err, result){
		res.render('home', {players: result});

	});

})

app.get('/create', function(req, res){
	res.render('create');
});



app.post('/create', function(req,res){
	var player = {
		name: req.body.name.trim(),
		pts: parseInt(req.body.pts),
		ast: parseInt(req.body.ast),
		reb: parseInt(req.body.reb),
		fantasy: parseInt(req.body.pts) + parseInt(req.body.ast)*2 + parseInt(req.body.reb)*1.5
	};

	if(player.name != '' && player.pts != ''){
		db.collection('players').insert(player, function(err, result){
			res.redirect('/');
		});
	}else{
		res.render('create', {message: 'Please enter proper dude', 
			player: req.body});
	}
})

app.get('/:name', function(req, res){
	db.collection('players').findOne({name:req.params.name}, function(err, result){
		if(err) console.log(err);
		res.render('user', {player:result});
	})
});

app.get('/:name/delete', function(req, res){
	db.collection("players").remove({name: req.params.name}, function(err, result){
		res.redirect('/');
	})
})