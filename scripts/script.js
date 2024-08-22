export {encriptar, desencriptar}

function encriptar(mensaje,clave) {
    
    var codCaracter;
    var nuevoCaracter;
    var msgEncriptado="";
    for (let i = 0; i < mensaje.length; i++) {
        codCaracter = mensaje.charCodeAt(i);
        nuevoCaracter = conseguirCaracter(codCaracter, clave);
        msgEncriptado += String.fromCharCode(nuevoCaracter)
    }
    return msgEncriptado;
}

function desencriptar(mensaje,clave) {
    clave = clave * -1;
    var codCaracter;
    var nuevoCaracter;
    var msgDesencriptado="";
    for (let i = 0; i < mensaje.length; i++) {
        codCaracter = mensaje.charCodeAt(i);
        nuevoCaracter = conseguirCaracter(codCaracter, clave);
        msgDesencriptado += String.fromCharCode(nuevoCaracter)
    }
    return msgDesencriptado;
}

function conseguirCaracter(codCaracter, clave) {
    let posición;
    let tipoCaracter = validarTipo(codCaracter);
    let cantcaracter;
    //Rango de los números
    if(tipoCaracter === 48){
        cantcaracter = 10
    }
    //Rango de las Mayucúlas y Minuscúlas
    if(tipoCaracter === 65 || tipoCaracter === 97){
        cantcaracter = 25;
    }
    //Hallar la nueva posición
    posición = (codCaracter - tipoCaracter + clave) % cantcaracter;
    return (posición + tipoCaracter);
}

function validarTipo(codCaracter) {
    let tipoCaracter;

    if (codCaracter >= 48 && codCaracter <= 57) {
        return tipoCaracter = 48; //Número
    }
    if (codCaracter >= 65 && codCaracter <= 90) {
        return tipoCaracter = 65; //Minuscúla
    }
    if (codCaracter >= 97 && codCaracter <= 122) {
        return tipoCaracter = 97; //Mayucúla
    }
    return tipoCaracter = 0;
}