var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/getItems', function(req, res) {

    res.contentType('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(obj);
}); 


app.get('/v1/admin/:username', function(request, response, next) {
  var username = request.params.username;
  findUserByUsername(username, function(error, user) {
    if (error) return next(error);
    return response.render('admin', user);
  });
}); 


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


