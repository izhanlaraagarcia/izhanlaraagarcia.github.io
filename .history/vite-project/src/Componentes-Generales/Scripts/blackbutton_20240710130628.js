var ctema = document.getElementById("tema")
ctema.style.cursor="pointer"
var dark = false;

ctema.addEventListener("click", ()=>{
    if(dark){
        document.body.backgroundColor="White";
        ctema.textContent = "ca,biar al modo claro";
        dark=false
    } else{
        document.body.backgroundColor="darkgrey";
        ctema.textContent="Cambiar a modo oscuro";
        dark=true
    }
})
