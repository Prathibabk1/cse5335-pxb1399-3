var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var jsonData;
var myCollection;

fs.readFile('input.json', 'utf8', function (err, data) {
  if (err) throw err;
  jsonData= JSON.parse(data);
});


MongoClient.connect('mongodb://heroku_j3qvr3g1:cirufnf212meq8t99kvilagp82@ds057954.mongolab.com:57954/heroku_j3qvr3g1', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= database.collection('test');  
for(var i=0; i<149; i++){
var v1= {ID:jsonData[i].ID,UNITID:jsonData[i].UNITID, INSTNM:jsonData[i].INSTNM, ADDR:jsonData[i].ADDR,STABBR:jsonData[i].STABBR,CITY:jsonData[i].CITY, ZIP:jsonData[i].ZIP };
myCollection.insert(v1,{w:1} ,function(err, result){
if(err)
console.log(err);
else{
console.log('inserted');
console.log(result);
}
});
}
   
    
});



    
    
    





