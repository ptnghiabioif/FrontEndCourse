var express = require('express');
var app = express();

var port = 3000

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index', {
        name: 'Nicolas'
    });
});

app.get('/users', function(req, res) {
    res.render('users/index', {
        users: [
            { id: 1, name: 'Nghia'},
            { id: 2, name: 'Trang'}
        ]
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});


