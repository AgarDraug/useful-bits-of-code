const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongojs = require('mongojs');
const db = mongojs('customerapp', ['users']);
const ObjectId = mongojs.ObjectId;

const app = express();

/*const logger = (req, res, next) => {
	console.log('logging...');
	next();
}

app.use(logger);
*/


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// golbal vars
app.use(function(req, res, next){
	res.locals.errors = null;
	next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.get('/', (req, res) =>{
	db.users.find((err, docs) => {
		//console.log(docs);	
		res.render('index', {
			title: 'customers',
			users: docs
		});
	});
});

app.post('/users/add', (req, res) =>{

	req.checkBody('first_name', 'First Name is Required').notEmpty();
	req.checkBody('last_name', 'Last Name is Required').notEmpty();
	req.checkBody('email', 'Email is Required').notEmpty();

	const errors = req.validationErrors();

	if(errors){
			res.render('index', {
		title: 'customers',
		users: users,
		errors: errors
	});


	}else{

	const newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
		}

		db.users.insert(newUser, (err, result) =>{
			if(err){
				console.log(err);
			}else{
				res.redirect('/');
			}
		})
	}

	
});

app.delete('/users/delete/:id', (req, res)=>{
	db.users.remove({_id: ObjectId(req.params.id)}, function(err, result){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	})
});

// kill all node instances - taskkill /f /im node.exe
app.listen(3000, () => {
	console.log('server started on port 3000');
});