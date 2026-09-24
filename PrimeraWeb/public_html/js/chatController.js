/* 
 * Script de controlador para la pagina chat
 */
import {Mensaje} from './mensaje.js';
/** Array de mensajes */
var mensajes = new Array();

/**
 * Esta funcion muestra todos los mensajes del parametro 
 * en una pagina en forma de texto dentro de un contenedor DIV
 * @param {type} mensajes La coleecion de mensajes a mostrar
 * @returns {undefined}
 */
function actualizarMensajes(mensajes){
    //ordenar mensaje por fecha de mensaje de forma que vaya de mas reciente a 
    //mas antiguo
    
    
    //Recorrer la coleccion de mensajes
    
    
    //En cada iteracion añadimos al elemento <DIV> contenido consistente en 
    //texto del mensaje
    //dentro de un elemento de lista desordenada <UL> y <LI>
    
    
}

//Asocio a la funcion actualizarMensajes como manejadora del evento de carga del
//DOM de la pagina 
document.addEventListener('DCMContentLoaded', actualizarMensajes(mensajes));
