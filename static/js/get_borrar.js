function borrarContacto() {
    const email = document.getElementById('email').value;
    const URL = "https://contactos-front.onrender.com/contactos" + email;

    var request = new XMLHttpRequest();
    request.open('DELETE', URL, true);

    request.send();

    request.onload = () => {
        if (request.status === 200) {
            // Contacto borrado correctamente
            console.log("Contacto borrado correctamente.");
        } else if (request.status === 404) {
            // No se encontró el contacto con ese correo
            console.log("No se encontró el contacto con ese correo.");
        } else {
            // Error al intentar borrar el contacto
            console.log("Error al intentar borrar el contacto.");
        }
    };
}

function regresar() {
    // Redirige al index.html
    window.location.href = "/";
}
