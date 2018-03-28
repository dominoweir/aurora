// Initialize Firebase
var config = {
  apiKey: "AIzaSyBv6XJb-MnqW_ma4ibMhwuZTdp-o9vR6_k",
  authDomain: "aurora-94c4f.firebaseapp.com",
  databaseURL: "https://aurora-94c4f.firebaseio.com",
  projectId: "aurora-94c4f",
  storageBucket: "aurora-94c4f.appspot.com",
  messagingSenderId: "650342810200"
};
firebase.initializeApp(config);
// Get a reference to the database service
var db = firebase.database().ref();
// create new references
var songsRef = db.ref('songs');
var tabsRef = db.ref('tabs');
var userRef = db.ref('users');
