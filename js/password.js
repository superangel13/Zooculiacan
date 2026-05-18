// El objeto ahora se llama "proyectos" todo junto y sin espacios
const proyectos = {
    "zooculiacan": {
        password:"norma",
        ruta: "norma/Zooculiacan.html"
    },
    "payan": {
        password: "payan123",
        // Corregido a Esmeralda y Payan con mayúsculas
        ruta: "Esmeralda/Payan/gym.html" 
    },
    "simon": {
        password: "simonEsmeralda",
        ruta: "Esmeralda/Simon/Babuino_hats.html"
    },
    "noemy": {
        password: "noemyPass",
        ruta: "Esmeralda/Noemy/Maquillaje.html"
    },
    "irving": {
        password: "irving99",
        ruta: "Esmeralda/Irving/Mundial_de_futbol.html"
    },
    "matzumoto": {
        password: "matzu456",
        ruta: "Esmeralda/Matzumoto/Bicicletas.html"
    },
    "karel": {
        password: "karelModa12",
        ruta: "Esmeralda/Karel/Estilos_de_moda.html"
    },
    "kevin": {
        password: "kevinCelulares", // Esta es su contraseña
        ruta: "Esmeralda/Kevin/Celulares.html" 
    },
        "riverin": {
        password: "Riverin123", // Esta es su contraseña
        ruta: "Esmeralda/Riverin/Camisetas.html" 
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
