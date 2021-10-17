//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("playername");
var room_name = localStorage.getItem("roomnamekey");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);

var name = message_data ["name"];
var like = message_data ["likes"];
var message = message_data ["message"];

var nametag = '<h4> ' +name + ' </h4>';
var messagetag = '<h4 class="message_h4"> ' + message + ' </h4>';
var likebutton = '<button class="btn btn-primary" id="' + firebase_message_id +'" value="' + like +'" onclick="updatelike(this.id)"> LIKE </button>';

var row = nametag + messagetag + likebutton;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function send(){
var msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({

      name: user_name,
      message: msg,
      likes: 0
});

document.getElementById("msg").innerHTML=""
//// we have written "" to empty the input ////
}

function logout(){

      localStorage.removeItem("playername");
      localStorage.removeItem("roomnamekey");

      window.location="login.html"
};

      function updatelike(mid){

            var buttonid = mid;
            /// mid =  firebase_message_id (short form) ////
            var likesgiven = document.getElementById(buttonid).value;
            var increaselike = Number(likesgiven)+ 1;
            firebase.database().ref(room_name).child(mid).update({
                  likes: increaselike
            });
      }