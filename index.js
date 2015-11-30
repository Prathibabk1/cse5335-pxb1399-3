var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
 

var obj;
app.get('/getItems/:id', function(req, res, next) {
  var id = req.params.id;
  console.log("the id is"+id);
    
    MongoClient.connect('mongodb://heroku_j3qvr3g1:cirufnf212meq8t99kvilagp82@ds057954.mongolab.com:57954/heroku_j3qvr3g1', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= database.collection('test'); 

myCollection.findOne({ID:id},function(err, result){
  if(err)
        console.log( err);
    else  
        console.log(result);
console.log(result.ID + ","+ result.UNITID +","+ result.INSTNM +","+ result.ADDR+","+result.CITY+","+result.STABBR+","+result.ZIP);
obj=result.ID + ","+ result.UNITID +","+ result.INSTNM +","+ result.ADDR+","+result.CITY+","+result.STABBR+","+result.ZIP;
obj=result;
console.log(obj+"************8obj************");
}); 

});
   
 res.send(obj);   
    
}); 


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


