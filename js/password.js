// 1. Aquí defines las contraseñas y las rutas exactas de cada cliente
const proyectos Clientes = {
    "zooculiacan": {
        password: "conalep2026",
        ruta: "proyectos/tienda_zoologico.html" // El del Conalep que movimos antes
    },
    "payan": {
        password: "payan123",
        ruta: "esmeralda/payan/Rutinagym.html"
    },
    "simon": {
        password: "simonEsmeralda",
        ruta: "esmeralda/simon/Babuino_hats.html"
    },
    "noemy": {
        password: "noemyPass",
        ruta: "esmeralda/noemy/Maquillaje.html"
    },
    "irving": {
        password: "irving99",
        ruta: "esmeralda/irving/Mundial_de_futbol.html"
    },
    "matzumoto": {
        password: "matzu456",
        ruta: "esmeralda/matzumoto/Bicicletas.html"
    },
    "karel": {
        password: "karelModa12",
        ruta: "esmeralda/karel/Estilos_de_moda.html"
    }
};

function accederA(cliente) {
    // 2. Preguntar la contraseña al usuario mediante la alerta
    let passwordIngresada = prompt("Introduce tu contraseña para ver tu avance:");

    // 3. Verificar si el cliente existe en nuestra lista
    if (proyectosClientes[cliente]) {
        
        // 4. Si la contraseña coincide, redirigir a su carpeta correspondiente
        if (passwordIngresada === proyectosClientes[cliente].password) {
            alert("¡Contraseña correcta! Cargando tus avances...");
            window.location.href = proyectosClientes[cliente].ruta;
        } else {
            alert("Contraseña incorrecta. No tienes acceso a este proyecto.");
        }

    } else {
        alert("Error: El cliente seleccionado no existe.");
    }
}
