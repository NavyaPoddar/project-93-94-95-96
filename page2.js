// Your web app's Firebase configuration

// CHANE THE DATA BASE / ASK MAM FOR IT!!!!!!!/
var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var username = localStorage.getItem("playername");
document.getElementById("user_name").innerHTML = " Welcome " + username + "!" ; 

function addroom(){
      var roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({

            purpose : "adding room key"
      });

      localStorage.setItem("roomnamekey",roomname);
      window.location= "page3.html";

      }

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("room name : " + Room_names );
      var row = '<div class = "room_name" id="' + Room_names + '" onclick = "redirecttoroom(this.id)"> # ' + Room_names +' </div> <hr>'

      document.getElementById("output").innerHTML  += row ;

      //End code

      });});}
getData();


function redirecttoroom(name){
      localStorage.setItem("roomnamekey " , name);
      window.location = "page3.html";

      
}

function logout(){

localStorage.removeItem("playername");
localStorage.removeItem("roomnamekey");
window.location="page1.html";

}