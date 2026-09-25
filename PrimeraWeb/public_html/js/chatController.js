/* 
 * @author Hector Villamediana
 */

/**
 * Esta funcion envia los mensajes 
 * @param {type} mensaje Los mensajes a enviar
 * @returns {undefined} Undefined 
 */
/* Script de controlador para la pagina chat
 */
import {Mensaje} from './mensaje.js'

var mensajes = new Array();

function enviarMensaje(){
    // Poniendo un <textarea> el usuario visualiza el mensaje a enviar.
    //Tambien se definira q por defecto este escrito "Escriba Aqui".
    
    let textoMensaje = document.getElementById('cajaMiMensaje').value;
    
    //Lo añadimos a la coleccion de mensajes
    
    mensajes.push(new Mensaje(textoMensaje, new Date()));
    
    //Limpiamos la caja de texto del mensaje
    document.getElementById('cajaMiMensaje').value = "";
    //Enfocamos la caja de texto del mensaje
    document.getElementById('cajaMiMensaje').focus();
    //Actualizamos la lista de mensajes
    actualizarMensajes();
}
/**
 * Esta funcion muestra todos los mensajes del parametro 
 * en una pagina en forma de texto dentro de un contenedor DIV
 * @param {type}
 * @returns {undefined}
 */
function actualizarMensajes() {
    //ordenar mensaje por fecha de mensaje de forma que vaya de mas reciente a 
    //mas antiguo
    //mensajes.reverse();
    const listMsgs = document.getElementById("msgList");
    while(listMsgs.firstChild){
        listMsgs.removeChild(listMsgs.firstChild);
    }
    //Recorrer la coleccion de mensajes
    for(let i = 0; i < mensajes.length; i++){

        //En cada iteración añadimos al elemento <DIV> contenido
        //consistente en el texto del mensaje, dentro de un elemento <LI>
        // create a new li element
        const newLi = document.createElement("li");
        // and give it the message's text content
        const newContent = document.createTextNode(mensajes[i].text +" "+new Intl.DateTimeFormat("es-ES").format(mensajes[i].dateTime));

        // add the text node to the newly created div
        newLi.appendChild(newContent);

        // add the newly created element and its content into the DOM
        listMsgs.insertBefore(newLi, null);
    }
}

//Asoscio la funcion de enviar mensaje como manejadora del evento click del
//elemento enviarBoton
document.getElementById("enviarBoton").addEventListener('click', enviarMensaje);
document.addEventListener('DOMContentLoaded', actualizarMensajes);