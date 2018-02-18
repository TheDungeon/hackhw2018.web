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

//const dataRef = new Firebase ('https://hack-hw2018.firebaseio.com/');

var nameText = document.getElementById('name');
nameText.innerHTML += player.name;

if (player.color === 0){
  color = 'blue';
  document.getElementById('color').className = 'blue';
}
else if (player.color === 1){
  color = 'red';
  document.getElementById('color').className = 'red';
}
else if (player.color === 2){
  color = 'yellow';
  document.getElementById('color').className = 'yellow';
}
else if (player.color === 3){
  color = 'green';
  document.getElementById('color').className = 'green';
}

var colorText = document.getElementById('color');
colorText.innerHTML += color;

const waitRef = firebase.database().ref().child('Waiting');

waitRef.on('value', snap => {
  var check = JSON.stringify(snap.val());
  console.log(check);

  if(check === "false"){
    window.location.href = "gamescreen.html";
  }
});
