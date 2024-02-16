
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBYOV357VeRsmJ5bb0vePvATvLvb0uc9LA",
      authDomain: "kwitter-53760.firebaseapp.com",
      databaseURL: "https://kwitter-53760-default-rtdb.firebaseio.com",
      projectId: "kwitter-53760",
      storageBucket: "kwitter-53760.appspot.com",
      messagingSenderId: "216616495473",
      appId: "1:216616495473:web:18d10b8c036b805b762ed0"
    };

 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
