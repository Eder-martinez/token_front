function getAll() {
    const URL = "https://back-token.onrender.com/contactos"; // Cambiado a HTTPS
    var request = new XMLHttpRequest();
    request.open('GET', URL);
    request.send();

    request.onload = (e) => {
        if (request.status === 200) {
            const response = request.responseText;
            const json = JSON.parse(response);
            console.log("response: " + response);
            console.log("json: " + JSON.stringify(json)); // Cambiado a JSON.stringify para evitar problemas en la consola

            const tbody_contactos = document.getElementById("tbody_contactos");
            tbody_contactos.innerHTML = ""; // Limpiamos la tabla antes de agregar nuevos elementos

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
                tbody_contactos.appendChild(tr);
            }
        } else {
            console.error("Error al obtener datos del servidor. Código de estado: " + request.status);
        }
    };
}

// Llamamos a getAll al cargar la página
document.body.onload = getAll();
