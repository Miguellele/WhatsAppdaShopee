function login(){
    nome = document.getElementById("nome").value;
    localStorage.setItem( "usuario", nome );
    window.location='salas.html'
}