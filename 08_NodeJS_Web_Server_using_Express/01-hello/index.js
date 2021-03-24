var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json')

db = low(adapter)

db.defaults({ users: [] })
    .write();

var port = 3000

// var users = [
//     { id: 1, name: 'Nghia' },
//     { id: 2, name: 'Trang' },
//     { id: 3, name: 'Anh' }
// ];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', {
        name: 'Nicolas'
    });
});

app.get('/users', function (req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    });
});

app.get('/users/search', function (req, res) {
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    })
});

app.get('/users/create', function (req, res) {
    res.render('users/create');
});

app.post('/users/create', function (req, res) {
    db.get("users").push(req.body).write();
    res.redirect('/users');
});

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


