import { encriptar} from "./script.js";

document.getElementById("encriptar").addEventListener("click",function(){
    const mensaje = document.getElementById("mensaje").value;
    const clave = parseInt(document.getElementById("clave").value);
    let msgEncriptado;
    msgEncriptado =encriptar (mensaje,clave);
    document.getElementById("encriptado").value=msgEncriptado;
    document.getElementById("mensaje").value="";
});
