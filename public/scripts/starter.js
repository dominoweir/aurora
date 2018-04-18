// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the objects in Firebase.
var songs = myFirebase.child("songs");
var users = myFirebase.child("users");

// Create new users
users.push({
  "username" : "dominoweir",
  "email" : "dominoweir@gmail,com",
  "device" : "",
  "queue" : "0",
  "downloading" : "",
  "downloads" : "",
  "uploads" : ""
});

users.push({
  "username":"wonton3d",
  "email":"donton@utexas,edu",
  "device": "",
  "queue" : "0",
  "downloading" : "",
  "downloads" : "",
  "uploads" : ""
});

songs.push({
  "title": "Under the Bridge",
  "artist": "Red Hot Chili Peppers",
  "tabs": ""
});

songs.push({
  "title": "Wonderwall",
  "artist": "Oasis",
  "tabs": ""
});

songs.push({
  "title": "Free Fallin",
  "artist": "Tom Petty",
  "tabs": ""
});
