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

var player = JSON.parse(localStorage.getItem('playerId'));

const playerObject = JSON.parse(localStorage.getItem("playerId"));

var stopButton = document.getElementById('stopButton');
var jumpButton = document.getElementById('jumpButton');

const dataRef = firebase.database().ref();
const playerRef = dataRef.child('Players').child(playerObject.id);

jumpButton.addEventListener('click', function() {
    console.log('jump');
    var jumpObject = playerRef.set({
      jump: true
    });
  });

stopButton.addEventListener('click', function() {
  console.log('stop');
  var stopObject = playerRef.set({
    stop: true
  });
});

if (player.color === 0){
  console.log('blue');
  document.getElementById('body').className = 'blue';
}
else if (player.color === 1){
  console.log('red');
  document.getElementById('body').className = 'red';
}
else if (player.color === 2){
  console.log('yellow');
  document.getElementById('body').className = 'yellow';
}
else if (player.color === 3){
  console.log('green');
  document.getElementById('body').className = 'green';
}

const isAliveRef = firebase.database().ref("Players").child(playerObject.id);
const wonRef = firebase.database().ref("Players").child(playerObject.id);

wonRef.on('value', function(snap) {
  let wonVal = snap.val();
  console.log(wonVal.won);
  if(wonVal.won === true){
    window.location.href = "winscreen.html";
  }
});

isAliveRef.on('value', function(snap) {
  let aliveVal = snap.val();
  console.log(aliveVal.isAlive);
  if(aliveVal.isAlive === false){
    window.location.href = "deadscreen.html";
  }
});
