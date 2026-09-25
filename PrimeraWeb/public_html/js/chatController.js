/* 
 * Script de controlador para la pagina chat
 */
import {Mensaje} from './mensaje.js';
/** Array de mensajes */
var mensajes = new Array();

/**
 * Esta funcion muestra todos los mensajes del parametro 
 * en una pagina en forma de texto dentro de un contenedor DIV
 * @param {type}
 * @returns {undefined}
 */
function actualizarMensajes() {
    //ordenar mensaje por fecha de mensaje de forma que vaya de mas reciente a 
    //mas antiguo
    mensajes.reverse();
    //Recorrer la coleccion de mensajes
    for (let i = 0; i < mensajes.length; i++) {
        //En cada iteracion añadimos al elemento <DIV> contenido consistente en 
        //texto del mensaje
        //dentro de un elemento de lista desordenada <UL> y <LI>
        document.getElementById("msgList").textContent= "<li>" + mensajes[i].text + "</li>";
        //Actualizamos la lista de mensajes
        
    }
    //En cada iteracion añadimos al elemento <DIV> contenido consistente en 
    //texto del mensaje
    //dentro de un elemento de lista desordenada <UL> y <LI>


}

//Asocio a la funcion actualizarMensajes como manejadora del evento de carga del
//DOM de la pagina 
document.addEventListener('DCMContentLoaded', actualizarMensajes);
