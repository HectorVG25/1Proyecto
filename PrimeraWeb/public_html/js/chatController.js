/* 
 * @author Hector Villamediana
 */

/**
 * Esta funcion envia los mensajes 
 * @param {type} mensaje Los mensajes a enviar
 * @returns {undefined} Undefined 
 */

import {Mensaje} from './mensaje.js'

var mensajes=new Array();

function enviarMensaje(){
    // Poniendo un <textarea> el usuario visualiza el mensaje a enviar.
    //Tambien se definira q por defecto este escrito "Escriba Aqui".
    
    let textoMensaje=document.getElementById('cajaMiMensaje').value;
    
    //Lo añadimos a la coleccion de mensajes
    
    mensajes.push(new Mensaje(textoMensaje,new Date()));
    
    //Limpiamos la caja de texto del mensaje
    document.getElementById('cajaMiMensaje').value="";
    //Enfocamos la caja de texto del mensaje
    document.getElementById('cajaMiMensaje').focus();
    //Actualizamos la lista de mensajes
    actualizarMensajes;
}

//Asoscio la funcion de enviar mensaje como manejadora del evento click del
//elemento enviarBoton
document.getElementById("enviarBoton").addEventListener('click',enviarMensaje);

