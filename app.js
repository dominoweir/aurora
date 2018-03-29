var fs = require('fs');
var config = {
  apiKey: "AIzaSyBv6XJb-MnqW_ma4ibMhwuZTdp-o9vR6_k",
  authDomain: "aurora-94c4f.firebaseapp.com",
  databaseURL: "https://aurora-94c4f.firebaseio.com",
  projectId: "aurora-94c4f",
  storageBucket: "aurora-94c4f.appspot.com",
  messagingSenderId: "650342810200"
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the objects in Firebase.
var songs = myFirebase.child("songs");
var tabs = myFirebase.child("tabs");
var users = myFirebase.child("users");

// Create new users
var domino = users.push({
  "username":"dominoweir",
  "email":"dominoweir@gmail.com"
});
var dominoKey = domino.key;
var don = users.push({
  "username":"wonton3d",
  "email":"donton@utexas.edu"
});
var donKey = don.key;

// get tabs for each song in a string
var utbTabs;
var ffTabs;
var wwTabs;
fs.readFileSync("../Aurora_v1/songs/underthebridge/tabs.txt", "utf-8", function read(err, data) {
    if (err) {
        throw err;
    }
    utbTabs = data;
});
fs.readFileSync("../Aurora_v1/songs/freefallin/tabs.txt", "utf-8",  function read(err, data) {
    if (err) {
        throw err;
    }
    ffTabs = data;
});
fs.readFileSync("../Aurora_v1/songs/wonderwall/tabs.txt", "utf-8", function read(err, data) {
    if (err) {
        throw err;
    }
    wwTabs = data;
});

songs.push(
  {
    "title": "Under the Bridge",
    "artist": "Red Hot Chili Peppers",
    "user": dominoKey,
    "tabs": utbTabs
  }
);

songs.push(
  {
    "title": "Wonderwall",
    "artist": "Oasis",
    "user": dominoKey,
    "tabs": wwTabs
  }
);

songs.push(
  {
    "title": "Free Fallin",
    "artist": "Tom Petty",
    "user": donKey,
    "tabs": ffTabs
  }
);
