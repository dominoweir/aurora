var config = {
  apiKey: "AIzaSyBv6XJb-MnqW_ma4ibMhwuZTdp-o9vR6_k",
  authDomain: "aurora-94c4f.firebaseapp.com",
  databaseURL: "https://aurora-94c4f.firebaseio.com",
  projectId: "aurora-94c4f",
  storageBucket: "aurora-94c4f.appspot.com",
  messagingSenderId: "650342810200"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
// add sign in listener to sign in button
var signInButton = document.getElementById('sign-in');
signInButton.addEventListener('click', signIn);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    // hide sign in text, show sign out instead
    document.getElementById('sign-in-text').innerHTML = "Log Out";

  } else {
    // User is signed out.
    document.getElementById('sign-in-text').innerHTML = "Log In";
  }
});

function signIn() {
  var user = firebase.auth().currentUser;
  // if someone is logged in, log them out
  if (user) {
    // Sign out of Firebase.
    firebase.database().goOffline();
    firebase.auth().signOut();
    window.location.reload();
  }
  // else bring up the login popup
  else{
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
};

function loadAllSongs() {

  var parent = document.getElementById("song-parent");
  var download = "<i class='far fa-arrow-alt-circle-down' onclick = 'startDownload()' ></i>";
  var check = "<i class='far fa-check-circle hide-element'></i>";
  var span = "<span style='font-weight: 100'>&emsp;by&emsp;</span>";

  // initialize firebase and get songs list
  var ref = firebase.database().ref("songs/");

  // this doesn't loook like it, but it's basically a for loop
  ref.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      var artist = childData.artist;
      var title = childData.title;

      // create a new HTML div element and basically add it to the end of the parent
      var div = document.createElement("div");
      div.className = "song";
      div.innerHTML = title + span + artist + download + check;
      parent.appendChild(div);
    });
  });
};

function startDownload(){
  console.log("Starting download...");
}
