// const request = require('request');
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render("home.hbs");
});
app.listen(port, () => {
    console.log("Listening on port: ", port);
});

