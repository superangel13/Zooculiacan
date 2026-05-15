// Aquí defines las contraseñas de cada cliente
const contraseñas = {
    "zooculiacan": "conalep2026",
    "payan": "payan123",
    "simon": "simonEsmeralda",
    "noemy": "noemyPass",
    "irving": "irving99",
    "matzumoto": "matzu456"
};

function accederA(cliente) {
    // 1. Preguntar la contraseña al usuario
    let passwordIngresada = prompt("Introduce tu contraseña para ver el avance:");

    // 2. Verificar si la contraseña coincide con la del cliente seleccionado
    if (passwordIngresada === contraseñas[cliente]) {
        alert("¡Contraseña correcta! Cargando tu avance...");
        // Redirige a la carpeta proyectos/nombre-del-cliente.html
        window.location.href = "proyectos/" + cliente + ".html";
    } else {
        alert("Contraseña incorrecta. No tienes acceso a este proyecto.");
    }
}
