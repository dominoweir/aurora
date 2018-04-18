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
}

function loadAllSongs() {

  var parent = document.getElementById("song-parent");
  var download = "<i class='far fa-arrow-alt-circle-down'></i>";
  var check = "<i class='far fa-check-circle hide-element'></i>";
  var span = "<span style='font-weight: 100'>&emsp;by&emsp;</span>";

  // get songs list
  var ref = firebase.database().ref("songs/");

  // this doesn't loook like it, but it's basically a for loop
  ref.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
      var artist = childData.artist;
      var title = childData.title;
      var id = childSnapshot.key;

      // create a new HTML div element and basically add it to the end of the parent
      var div = document.createElement("div");
      div.className = "song";
      div.id = id.toString();
      div.innerHTML = title + span + artist + download + check;
      div.addEventListener('click', function(){
        startDownload(this.id);
      });
      parent.appendChild(div);
    });
  });
}

function escapeEmailAddress(email) {
  if (!email) return false

  // Replace '.' (not allowed in a Firebase key) with ',' (not allowed in an email address)
  email = email.toLowerCase();
  email = email.replace(/\./g, ',');
  return email;
}

function startDownload(id){
  console.log("Starting download...");
  var div = document.getElementById(id);
  /*
  var download = div.childNodes[0];
  var check = div.childNodes[1];
  check.classList.remove("hide-element");
  download.classList.add("hide-element");
  */

  // because of the stupid comma/period thing
  var currentEmail = escapeEmailAddress(firebase.auth().currentUser.email);

  // this doesn't look like it, but it's basically a for loop over the users list
  firebase.database().ref("users/").once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var eachEmail = childSnapshot.val().email;
      var uid = childSnapshot.key;
      if(eachEmail == currentEmail){
        var userKey = uid;
        console.log(id);
        firebase.database().ref("users/" + userKey + "/queue").set("1");
        firebase.database().ref("users/" + userKey + "/downloading").set(id);
      }
    });
  });
}

function loadProfile(){
<<<<<<< HEAD
  var img = document.getElementById("profile-image");
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      name.innerHTML = user.displayName;
      email.innerHTML = user.email;
      img.src = user.photoURL;

    } else {
      // User is signed out.
      name.innerHTML = "";
      email.innerHTML = "";
    }
  });
=======
  var user = firebase.auth().currentUser;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      var name = profile.displayName;
      var email = profile.email;
      var photo = profile.photoURL;
      document.getElementById("name").innerHTML(name);
      document.getElementById("email").innerHTML(email);
      document.getElementById("profile-image").src=photo;
    });
  }
>>>>>>> rebase
}
