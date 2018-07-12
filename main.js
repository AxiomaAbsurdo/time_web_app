
var express = require('express');
var app = express();
var path = require("path");
var fs = require('fs');

app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
app.use('/css', express.static('css'));
app.use('/time_web_app', express.static('time_web_app'));

app.get('/', (req, res) => {
    res.sendFile("C:/Users/mmortara001/curso/time_web_app/index.html");
});
app.listen(8080, () => console.log('server started at localhost'));