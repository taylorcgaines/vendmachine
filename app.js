const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = require('./Routes/router')
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vendmachine');


app.use(router);

app.listen(3000, function(){
  console.log("hi")
})
