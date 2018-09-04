let express = require('express');
let app = express()
let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restapi');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/api', apiRoutes)

var port = process.env.PORT || 3000;
app.get('/',(req,res) => res.send("Hello World"));
app.listen(port,function(){
    console.log('running REST-API on port' +port)
})