/* 
 * @author Hector Villamediana
 */

/**
 * Esta funcion envia los mensajes 
 * @param {type} mensaje Los mensajes a enviar
 * @returns {undefined} Undefined 
 */
function enviarMensaje(mensaje){
    // Poniendo un <textarea> el usuario visualiza el mensaje a enviar.
    //Tambien se definira q por defecto este escrito "Escriba Aqui".
    let textoMensaje=document.getElementById('enviarBoton').value;
    //Lo añadimos a la coleccion de mensajes
    mensajes.add(new Mensaje(textoMensaje,new Date));

}

//Asoscio la funcion de enviar mensaje como manejadora del evento click del
//elemento enviarBoton
document.getElementById("enviarBoton").addEventListener('click',enviarMensaje);

