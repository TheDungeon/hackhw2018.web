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
var button = document.getElementById('joinRoom');
var roomCode = document.getElementById('roomCodeTextInput');

const dataRef = new Firebase ('https://hack-hw2018.firebaseio.com/')
const itemRef = dataRef.child('Items');

button.addEventListener('click', function() {
  itemRef.push({
    item: roomCode.value
  });
  roomCode.value = '';
})