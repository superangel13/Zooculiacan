// El objeto ahora se llama "proyectos" todo junto y sin espacios
const proyectos = {
    "zooculiacan": {
        password: "conalep2026",
        ruta: "proyectos/tienda_zoologico.html"
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
    // 1. Preguntar la contraseña al usuario
    let passwordIngresada = prompt("Introduce tu contraseña para ver tu avance:");

    // 2. Verificar si el cliente existe en nuestra lista
    if (proyectos[cliente]) {
        
        // 3. Si la contraseña coincide, redirigir
        if (passwordIngresada === proyectos[cliente].password) {
            alert("¡Contraseña correcta! Cargando tus avances...");
            window.location.href = proyectos[cliente].ruta;
        } else {
            alert("Contraseña incorrecta. No tienes acceso a este proyecto.");
        }

    } else {
        alert("Error: El cliente seleccionado no existe.");
    }
}
