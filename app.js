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
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public')); //middleware
app.use(bodyParser.urlencoded({extended: true}));

app.get('/geese', function(req, res){
    res.send(geeseArray);
});


app.post('/geese', function (req,res) {
    //console.log(req.body)
 if (req.body.name === '') {
     return (res.sendStatus(400))
    } else {
        geeseArray.push(req.body); //req.body = --> (data : )from client
        res.sendStatus(201);
    }
});

app.listen(port, function(){
    console.log('Running on port', port);
});