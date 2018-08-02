//-----------------------------------DEPENDENCIES-------------------------------
const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookmarks', {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});

app.use(express.static('public'));

app.use(express.json());
//---------------------------------Controllers----------------------------------
const bookmarksController = require('./controllers/bookmarks.js');
app.use('/bookmarks', bookmarksController)

//------------------------------------Listener----------------------------------

app.listen(port, ()=>{
  console.log('Listening...');
});
