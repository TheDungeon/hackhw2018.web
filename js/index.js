(function() {
  var config = {
    apiKey: "AIzaSyC2-ypnwEY0R0GhFAxie2UKlBSuJ_5lBqQ",
    authDomain: "hack-hw2018.firebaseapp.com",
    databaseURL: "https://hack-hw2018.firebaseio.com/",
    projectId: "hack-hw2018",
    storageBucket: "hack-hw2018.appspot.com",
    messagingSenderId: "28719308696"
  };
  firebase.initializeApp(config);

}());
var joinButton = document.getElementById('joinRoom');
var roomCode = document.getElementById('roomCodeTextInput');

const dataRef = new Firebase ('https://hack-hw2018.firebaseio.com/%27');
const playerRef = dataRef.child('Players');

joinButton.addEventListener('click', function() {
  var playerObject = playerRef.push({
      name: usernameTextInput.value,
      isAlive: true
  });

  localStorage.setItem('playerId', JSON.stringify({
    id: playerObject.key,
    name: usernameTextInput.value,
  }));

  window.location.href = "loading.html";
})
