// Load modules
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/routes.js');
app.use('/', routes);

// Set port
var port = 3000;
app.listen(port);
