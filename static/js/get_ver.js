function verContactos() {
    const URL = "https://back-token.onrender.com/contactos"; // Reemplaza con la URL correcta de tu servidor FastAPI
    var request = new XMLHttpRequest();
    request.open('GET', URL, true);

    request.send();

    request.onload = () => {
        const response = request.responseText;
        const json = JSON.parse(response);

        const tbody_contactos = document.getElementById("tbody_contactos");

        tbody_contactos.innerHTML = null;

        for (var i = 0; i < Object.keys(json).length; i++) {
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");

            td_email.innerHTML = json[i]["email"];
            td_nombre.innerHTML = json[i]["nombre"];
            td_telefono.innerHTML = json[i]["telefono"];

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

            // Modificación: Agregar el botón "Ver" a cada fila
            var td_acciones = document.createElement("td");
            var botonVer = document.createElement("button");
            botonVer.innerHTML = "Ver";
            botonVer.onclick = function(index) {
                return function() {
                    mostrarDetalle(json[index]["email"], json[index]["nombre"], json[index]["telefono"]);
                };
            }(i);
            td_acciones.appendChild(botonVer);
            tr.appendChild(td_acciones);

            tbody_contactos.appendChild(tr);
        }
    };
}

function mostrarDetalle(email, nombre, telefono) {
    // Ocultar la tabla de contactos
    document.getElementById("table_contactos").style.display = "none";

    // Mostrar la sección de detalle
    var detalleContacto = document.getElementById("detalle_contacto");
    detalleContacto.style.display = "block";

    // Mostrar detalles del contacto
    document.getElementById("detalle_email").innerHTML = "Email: " + email;
    document.getElementById("detalle_nombre").innerHTML = "Nombre: " + nombre;
    document.getElementById("detalle_telefono").innerHTML = "Teléfono: " + telefono;
}

function regresarDesdeDetalle() {
    // Mostrar la tabla de contactos
    document.getElementById("table_contactos").style.display = "table";

    // Ocultar la sección de detalle
    document.getElementById("detalle_contacto").style.display = "none";
}

function regresarDesdeLista() {
    // Redirige al índice
    window.location.href = "/";
}
