const abrirLogin = 
document.querySelector("#abrir-login"); 

const cerrarLogin = 
document.querySelector("#cerrar-login"); 

const login = 
document.querySelector("#login");

abrirLogin.addEventListener("click",()=>
{
    login.showModal();
})

cerrarLogin.addEventListener("click",()=>
{
    login.close();
})