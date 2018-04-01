function Aurora(){
  this.initFirebase();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
Aurora.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
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
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

Aurora.prototype.signIn = function() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithRedirect(provider);
};

Aurora.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
  window.location.reload();
};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
Aurora.prototype.onAuthStateChanged = function(user) {
  if (user) {
    //var username = user.displayName;
    //var profilePicUrl = user.photoURL;

    //this.userPic.style.backgroundImage = 'url(' + (profilePicUrl || '/images/profile_placeholder.png') + ')';
    //this.userName.textContent = userName;

    // Show user's profile and sign-out button.
    //this.userName.removeAttribute('hidden');
    //this.userPic.removeAttribute('hidden');
    //this.signOutButton.removeAttribute('hidden');

    // ====================== Load User Data ======================
    //this.loadUserSongs();

    // ====================== Edit/Remove Handlers ======================



    // Hide sign-in button.
    // this.signInButton.setAttribute('hidden', 'true');
  } else {

    // Hide user's profile and sign-out button.
    //this.userName.setAttribute('hidden', 'true');
    //this.userPic.setAttribute('hidden', 'true');
    //this.signOutButton.setAttribute('hidden', 'true');
    // Show sign-in button.
    //this.signInButton.removeAttribute('hidden');
  }
};

Aurora.prototype.loadUserSongs = function(){
  var currentUser = this.auth.currentUser.uid;
};

Aurora.prototype.loadAllSongs = function(){
  
};

Aurora.prototype.addNewSong = function(){

};

Aurora.prototype.editSongDetails = function(){

};

Aurora.prototype.deleteSong = function(){

};
