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

 console.log(numOfChildren);
 console.log(numOfChildren % 4);

  var playerObject = playerRef.push({
      name: usernameTextInput.value,
      isAlive: true,
      color: numOfChildren % 4
  });

  localStorage.setItem('playerId', JSON.stringify({
    id: playerObject.name(),
    name: usernameTextInput.value,
    color: numOfChildren % 4
  }));

  window.location.href = "loading.html";
});
