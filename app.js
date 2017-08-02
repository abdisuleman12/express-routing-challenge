// This array will not be here when we add a database
// that is where data wshould be based
var geeseArray = [
    {
        name: 'Fred',
        age: 5,
        type: 'Betelgeusian Goosian'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];

var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.get('/geese', function(req, res){
    res.send(geeseArray);
});

app.listen(port, function(){
    console.log('Running on port', port);
});