var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	item: 'Give cats bath',
	completed: false
},
{
	id: 2,
	item: 'Wash the dishes',
	completed: false
}, 
{
	id: 3,
	item: 'Clean the bathrooms',
	completed: true
}];

//GET
app.get('/', function(req, res) {
	console.log("GET from server");
	res.send('Todo API root');
});

//GET /todos
app.get('/todos', function(req, res) {
	console.log("GET todos from server");
	res.json(todos);
});

//GET /todos/:id
app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

});


app.listen(PORT, function () {
	console.log("Listening on port" + PORT);
});





