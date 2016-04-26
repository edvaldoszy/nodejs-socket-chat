var app = require('./app');
var http = require('http').Server(app);
var socket = require('socket.io')(http);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

socket.on('connection', function(client) {
    console.log('User connected');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
