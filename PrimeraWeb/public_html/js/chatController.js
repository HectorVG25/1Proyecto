/* 
 * @author Hector Villamediana
 */

/**
 * Esta funcion envia los mensajes 
 * @param {type} mensaje Los mensajes a enviar
 * @returns {undefined} Undefined 
 */
* Script de controlador para la pagina chat
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

//Asoscio la funcion de enviar mensaje como manejadora del evento click del
//elemento enviarBoton
document.getElementById("enviarBoton").addEventListener('click',enviarMensaje);
document.addEventListener('DCMContentLoaded', actualizarMensajes);

