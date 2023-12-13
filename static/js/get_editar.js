function editarContacto() {
    const correoActual = document.getElementById('correo_actual').value;
    const nuevoEmail = document.getElementById('email').value;
    const nuevoNombre = document.getElementById('nombre').value;
    const nuevoTelefono = document.getElementById('telefono').value;

    const URL = "https://back-token.onrender.com/contactos" + correoActual; 
    
    fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nuevoNombre,
            telefono: nuevoTelefono,
        }),
    })
    .then(response => {
        if (response.ok) {
            // Contacto editado 
            document.getElementById('mensaje').innerHTML = 'Contacto editado correctamente.';
        } else if (response.status === 404) {
            // No se encontró el contacto 
            document.getElementById('mensaje').innerHTML = 'No se encontró el contacto con ese correo.';
        } else {
            // Error al intentar editar 
            document.getElementById('mensaje').innerHTML = 'Error al intentar editar el contacto.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function cancelarEdicion() {
    // Implementa la lógica para cancelar la edición si es necesario
}

function regresar() {
    // Redirige al índice 
    window.location.href = "/";
}
