var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "x",
	password: "x",
	database: "students"
});
connection.connect();


router.get('/getStudents', (req, res, next)=>{

	connection.query('SELECT * FROM students', (error, results, field)=>{
		if(error) throw error;
		res.json(results);
	});

	// var students = [
	// 	'Sean',
	// 	'Drew',
	// 	'Daniel',
	// 	'Kyle'
	// ];

	// res.json(students);//Check this in EXPRESS
});

//Make addStudent route from App.js in FE!
//router.post. this is not a get request!!!
router.post('/addStudent', (req,res,next)=>{
	var studentToAdd = req.body.name;
	// console.log(req.body);
	connection.query('INSERT INTO students (name) VALUES (?)', [studentToAdd], (error, results, field)=>{
		if (error) throw error;
		connection.query('SELECT * FROM students', (error2, selectResults, field)=>{
		if(error2) throw error2;
		res.json(selectResults);
	})

	})
	// res.json([studentToAdd]);
	//From error, studentToAdd is a string, not an array. we can only map through arrays
});


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
