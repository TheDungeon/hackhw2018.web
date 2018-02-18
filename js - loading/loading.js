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

//figure this out later
//var colorText = document.getElementById('color');
//colorText.innerHTML += player.name; 

const waitRef = firebase.database().ref().child('Waiting');

waitRef.on('value', snap => {
  var check = JSON.stringify(snap.val());
  console.log(check);
  
  if(check === "false"){
    window.location.href = "gamescreen.html";
  }
});