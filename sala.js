nome = localStorage.getItem('usuario')
document.getElementById('nomeUsuario').innerHTML= nome

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
    firebase.database().ref("/").on('value', function(snapshot) { 

      document.getElementById("salasExistentes").innerHTML = ""; 
      
      snapshot.forEach(function(childSnapshot) { 
        nomesSalas  = childSnapshot.key;
        row = "<div class='salas' id="+nomesSalas+" onclick='ir(this.id)' >"+ nomesSalas +"</div><br>";
        document.getElementById("salasExistentes").innerHTML += row;
  });
  });
  
  
  }
  getData();
  function criarSala()
  {
    nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);
    firebase.database().ref("/").child(nomeSala).update({sala: "sala adicionada"});
    ir(nomeSala);
      
  }
  
  

  
  function ir(name)
  {
    localStorage.setItem("Sala",name)
    window.location = "chat.html";
    
  }
  
  function logout() {
    localStorage.removeItem("usuario");
    localStorage.removeItem( "Sala");
    window.location = "index.html";
  }
  