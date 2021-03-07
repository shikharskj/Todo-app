// require express library
const express = require('express');

// setting port number
const port = 9000;

// setting mongoose server
const db = require('./config/mongoose');
const Tasks =require('./models/tasks');

const app = express();

// middleware to parse incoming encoded requests
app.use(express.urlencoded());

// use express router
app.use('/',require('./routes'));

// setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

// middleware to access the files present in assets folder
app.use(express.static('assets'));

// listen for connection
app.listen(port,function(err){
    if(err){
        console .log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});