var urlAntesDeInsertar;  // Variable global para almacenar la URL antes de insertar

function insertarContacto() {
    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;

    // Validar los campos si es necesario

    const URL = "http://127.0.0.1:8000/contactos";
    // const URL = "https://shm-backend-105ae4e301e9.herokuapp.com/contactos";

    var request = new XMLHttpRequest();
    request.open('POST', URL, true);
    request.setRequestHeader('Content-Type', 'application/json');
    var nuevoContacto = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    request.send(JSON.stringify(nuevoContacto));

    request.onload = () => {
        console.log("Contacto insertado exitosamente");
        
        urlAntesDeInsertar = window.location.href;
        window.location.href = "/buscar";
    };
}

function cancelarInsercion() {
    window.location.href = urlAntesDeInsertar || "/";
}
function regresar() {
    // Redirige al índice 
    window.location.href = "/";
}
