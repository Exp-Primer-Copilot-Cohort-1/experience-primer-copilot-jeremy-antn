// Create web server
// npm install express

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Parse JSON (application/json content-type)
app.use(bodyParser.json());

// In-memory database
var comments = [];

// GET /comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000/');
});