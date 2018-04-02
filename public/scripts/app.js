function initAurora(){
  // ====================== Menu ======================
  var signInButton = document.getElementById('sign-in');

  // ====================== Sign-out/Sign-in Handlers ======================
  signInButton.addEventListener('click', signIn);

  // ====================== Firebase setup ======================
  initFirebase();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
function initFirebase() {
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

  firebase.auth().onAuthStateChanged(onStateChanged);
};

function onStateChanged() {
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    user.providerData.forEach(function (profile) {
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
    });
    // hide sign in, show sign out instead
    document.getElementById('sign-in-text').innerHTML = "Log Out";

  } else {
    // User is signed out.
    document.getElementById('sign-in-text').innerHTML = "Log In";
  }
}

function signIn() {
  var user = firebase.auth().currentUser;
  // if someone is logged in, log them out
  if (user) {
    console.log("Sign out user");
    // Sign out of Firebase.
    firebase.auth().signOut();
    window.location.reload();
  }
  // else bring up the login popup
  else{
    console.log("Sign in user");
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
};

function loadUserSongs() {

};

function loadAllSongs() {

};

function addNewSong() {

};

function editSongDetails() {

};

function deleteSong() {

};
