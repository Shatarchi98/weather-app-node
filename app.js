// const request = require('request');
const hbs = require('hbs');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render("home.hbs");
});
app.listen(3000);

