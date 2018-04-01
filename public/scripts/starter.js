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

songs.push(
  {
    "title": "Under the Bridge",
    "artist": "Red Hot Chili Peppers",
    "user": dominoKey,
    "tabs": "X"
  }
);

songs.push(
  {
    "title": "Wonderwall",
    "artist": "Oasis",
    "user": dominoKey,
    "tabs": "X"
  }
);

songs.push(
  {
    "title": "Free Fallin",
    "artist": "Tom Petty",
    "user": donKey,
    "tabs": "X"
  }
);
