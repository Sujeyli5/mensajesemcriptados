import { desencriptar} from "./script.js";

document.getElementById("desencriptar").addEventListener("click",function(){
    const mensaje = document.getElementById("encriptado").value;
    const clave = parseInt(document.getElementById("clave").value);
    let msgEncriptado;
    msgEncriptado = desencriptar (mensaje,clave);
    document.getElementById("mensaje").value=msgEncriptado;
    document.getElementById("encriptado").value="";
});