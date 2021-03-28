var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware')

var port = 3000

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(express.static('public'))

// Routes...
app.get('/', function (req, res) {
    res.render('index', {
        name: 'Nicolas'
    });
});

app.use('/users', authMiddleware.requireAuth, userRoutes)
app.use('/auth', authRoutes)

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


