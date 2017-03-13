var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//GET
app.get('todo-api/', function(req, res) {
	console.log("GET from server");
	res.send('Todo API root');
});

app.listen(PORT, function () {
	console.log("Listening on port" + PORT);
});