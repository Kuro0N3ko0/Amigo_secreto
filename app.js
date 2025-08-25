
let amigos = [];

// Función para agregar un amigo a la lista, lo agrega al array de amigos y limpia la caja de texto   
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === '') {
        alert('"Por favor, inserte un nombre."');
        LimpiarCaja();
        return;
    }
    amigos.push(nombre);
    mostrarListaAmigos();// mostrar la lista actualizada
    LimpiarCaja();
    //alternativa para mostrar la lista de amigos
    /*document.getElementById("listaAmigos").innerHTML = amigos.join('<br>');*/

    
}

// Funcion para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    for (let i = 0; i < amigos.length; i++) { //
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

// Función para limpiar la caja de texto después de agregar un amigo 
function LimpiarCaja() { 
    document.getElementById('amigo').value = '';
}

// Funcion para sortear un amigo de la lista
function SortearAmigos() {
    //validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    //obtener un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //obtener el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];

    //mostrar el amigo seleccionado utilizando innerhtml
    //document.getElementById("amigoSeleccionado").innerHTML = "El amigo seleccionado es: " + amigoSeleccionado;
    //o utilizando alert    
    alert("El amigo seleccionado es: " + amigoSeleccionado);

}

