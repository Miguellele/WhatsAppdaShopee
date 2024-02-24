nome = localStorage.getItem("usuario");
sala = localStorage.getItem("Sala");



const firebaseConfig = { 
    apiKey: "AIzaSyB_HGrG2BGLzdx3sUGBqt12J2N8hpu8okU", 
    authDomain: "whatsappdashopee.firebaseapp.com", 
    databaseURL:"https://whatsappdashopee-default-rtdb.firebaseio.com",
    projectId: "whatsappdashopee", 
    storageBucket: "whatsappdashopee.appspot.com", 
    messagingSenderId: "849304238360", 
    appId: "1:849304238360:web:ecce7ea6c8a63e4c66066d" 
  };
  
firebase.initializeApp(firebaseConfig)

function getData() {  
  firebase.database().ref("/" + sala).on('value', function(snapshot) { 
    
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key;
      childData = childSnapshot.val();
      console.log(childData,childKey)
      if (childKey != "sala") {
        firebaseMessageId = childKey
        messageData = childData;
        // console.log(firebaseMessageId, messageData);
        nome = messageData['usuario']
        like = messageData['like']
        mensagem = messageData['text']
        nameWithTag = "<h4>" + nome + "<img class='user_tick' src='tick.png'> </h4>"
        messageWithTag = "<h4 class='message_h4'>" + mensagem + "</h4>"
        likeWithTag = "<button class='yellow' id="+ firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'>"
        iconeWithTag = "<span>❤️Like: "+ like +"</span></button><hr>";
        row = nameWithTag + messageWithTag + likeWithTag + iconeWithTag
        document.getElementById("output").innerHTML += row
      }
 });
 });
 
 
 }
 getData();  


function send() {
   mensagem=document.getElementById("mensagem").value
   firebase.database().ref(sala).push({
    usuario:nome,
    text:mensagem,
    like:0
   })
   document.getElementById("mensagem").value=""
} 


function updateLike(messageId) {
  likes=document.getElementById(messageId).value
  var updateLikes=Number(likes)+1
  firebase.database().ref(sala).child(messageId).update({
    like:updateLikes
  })
}
function logout() {
  localStorage.removeItem("usuario");
  localStorage.removeItem( "Sala");
  window.location = "index.html";
}


    
