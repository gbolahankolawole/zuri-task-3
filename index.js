//import required modules
const express = require('express');
const connectDB = require('./db/db.js');
require('dotenv').config();

//params
const {PORT} = process.env;
const port = process.env.PORT || PORT;

//connect to DB
connectDB();

//instantiate the server
const app = express();

//initialize express middleware
app.use(express.json({extended: false}));

//create routes
app.get('/', (req, res) =>{
    res.json({message: 'Welcome to Zuri Crud App'});
});


//listen for connections
app.listen(port, ()=>{
    console.log(`app is running on at ${port}`);
});