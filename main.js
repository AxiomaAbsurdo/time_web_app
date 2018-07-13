var express = require('express');
var app = express();
var firebase = require('firebase');
var path = require("path");
var fs = require('fs');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCviTqs4VeR-SMrPTYX6G5yEYLnT67hyVc",
    authDomain: "timesheetentr.firebaseapp.com",
    databaseURL: "https://timesheetentr.firebaseio.com",
    projectId: "timesheetentr",
    storageBucket: "timesheetentr.appspot.com",
    messagingSenderId: "524915819635"
};
firebase.initializeApp(config);

var playersRef = firebase.database().ref("players/");

playersRef.set ({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});

app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
app.use('/css', express.static('css'));
app.use('/time_web_app', express.static('time_web_app'));
console.log(firebase.database().ref('/players'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});
app.listen(8080, () => console.log('server started at localhost'));