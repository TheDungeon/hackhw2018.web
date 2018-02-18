(function() {
  var config = {
    apiKey: "AIzaSyC2-ypnwEY0R0GhFAxie2UKlBSuJ_5lBqQ",
    authDomain: "hack-hw2018.firebaseapp.com",
    databaseURL: "https://hack-hw2018.firebaseio.com",
    projectId: "hack-hw2018",
    storageBucket: "hack-hw2018.appspot.com",
    messagingSenderId: "28719308696"
  };
  firebase.initializeApp(config);

}());
var joinButton = document.getElementById('joinRoom');
var roomCode = document.getElementById('roomCodeTextInput');

const dataRef = new Firebase ('https://hack-hw2018.firebaseio.com/');
const playerRef = dataRef.child('Players');
var numOfChildren; //0:blue, 1:red, 2:yelllow, 3:green

joinButton.addEventListener('click', function() {

  playerRef.once('value', function(snap){
    numOfChildren = snap.numChildren()
  });

  var playerObject = playerRef.push({
      color: numOfChildren % 4,
      name: usernameTextInput.value,
      isAlive: true,
<<<<<<< Updated upstream
      won: false,
      color: numOfChildren % 4,
      jump: false,
      stop: false
=======
      won: false
>>>>>>> Stashed changes
  });

  localStorage.setItem('playerId', JSON.stringify({
    id: playerObject.name(),
    name: usernameTextInput.value,
    color: numOfChildren % 4
  }));

  window.location.href = "loading.html";
});
