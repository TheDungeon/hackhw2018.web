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

const playerObject = JSON.parse(localStorage.getItem("playerId"));

var stopButton = document.getElementById('stopButton');
var jumpButton = document.getElementById('jumpButton');

jumpButton.addEventListener('click', function() {
  console.log('jump');
  });

stopButton.addEventListener('click', function() {
  console.log('stop');
});

const isAliveRef = firebase.database().ref("Players").child(playerObject.id);

isAliveRef.on('value', function(snap) {
  let value = snap.val();
  console.log(value.isAlive);
  if(value.isAlive === false){
    window.location.href = "deadscreen.html";
  }
});