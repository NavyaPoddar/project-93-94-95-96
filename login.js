function adduser(){
    var user = document.getElementById("user_name").value;
    localStorage.setItem("playername",user);

    window.location="page2.html";
}