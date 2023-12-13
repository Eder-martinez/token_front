document.addEventListener('DOMContentLoaded', function () {
    getAll();
});

function getAll() {
    fetch('http://localhost:8000/contactos')
        .then(response => response.json())
        .then(data => {
            const tbody_contactos = document.getElementById("tbody_contactos");
            tbody_contactos.innerHTML = "";

            data.forEach(contacto => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${contacto.email}</td>
                    <td>${contacto.nombre}</td>
                    <td>${contacto.telefono}</td>
                    <td><button onclick="eliminarContacto('${contacto.email}')">Eliminar</button></td>
                `;
                tbody_contactos.appendChild(tr);
            });
        })
        .catch(error => console.error('Error:', error));
}

function insertarContacto() {
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;

    const nuevoContacto = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    fetch('http://localhost:8000/contactos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoContacto),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Contacto insertado:', data);
            getAll();
        })
        .catch(error => console.error('Error:', error));
}

function eliminarContacto(email) {
    fetch(`http://localhost:8000/contactos/${email}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            console.log('Contacto eliminado:', data);
            getAll();
        })
        .catch(error => console.error('Error:', error));
}
