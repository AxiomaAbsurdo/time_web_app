var express = require('express');
var app = express();
var firebase = require('firebase');
var path = require("path");
var fs = require('fs');
var bodyParser = require('body-parser');

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

//Get weekStart
function getWeekStart( logicDate ) {
    var date = new Date(logicDate);
    var day = date.getDay();  
    if( day !== 0 ) 
        date.setHours(-24 * (day)); 
    return date;
}

//Get weekEnd
function getWeekEnd( logicDate ) {
    var date = new Date(logicDate);
    var day = date.getDay();  
    if( day !== 6 ) 
        date.setHours(24 * (6 - day)); 
    return date;
}

//Get Week
Date.prototype.getWeek = function () {
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
};

//Insert hours to DB
function insertHours(uid, date, leave, hours) {
    // An hour entry.
    var weekStart = getWeekStart(date).toLocaleDateString("en-US");
    var weekEnd = getWeekEnd(date).toLocaleDateString("en-US");
    var week = date.getWeek() - 1;
    var postData = {
        author: uid,
        hours: hours,
        weekStart : weekStart,
        weekEnd : weekEnd,
        week: week,
        leave: leave,
    };

    // Get a key for a new entry.
    var hoursKey = firebase.database().ref().child('entries').push().key;

    // Write the new entry's data simultaneously in the entries list and the user's entry list.
    var updates = {};
    updates['/entries/' + hoursKey] = postData;
    updates['/user-entries/' + uid + '/' + hoursKey] = postData;

    return firebase.database().ref().update(updates);
}

app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
app.use('/css', express.static('css'));
app.use('/time_web_app', express.static('time_web_app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
    var uid = req.body.uid;
    var date = req.body.dateEntry;
    var date = new Date(req.body.dateEntry);
    var leave = false;
    var hours = req.body.hours;
    insertHours(uid, date, leave, hours);
})
app.listen(8080, () => console.log('server started at localhost'));