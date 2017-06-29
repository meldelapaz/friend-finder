//BASIC NPM PACKAGES
var express    = require('express');
var bodyParser = require('body-parser');
var path       = require('path');


//SETS UP THE EXPRESS APP
var PORT = process.env.PORT || 8080;
var app  = express();

//SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api.json'}));

app.use(express.static('app/public'));

require('./app/routing/htmlRoutes.js')(app);
//require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function(){
    console.log('Server listening on %d', PORT)
});