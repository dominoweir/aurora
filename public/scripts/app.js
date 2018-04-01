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
