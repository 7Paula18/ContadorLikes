// 1. Seleccionar los elementos del HTML
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tabla = document.getElementById("tabla-registros");

// 2. Crear la variable del contador
let likes = 0;

// 3. Escuchar los clics del botón
boton.addEventListener("click", () => {

    // Aumentar el contador
    likes++;

    // Actualizar el número en la página
    textoContador.textContent = likes;

    // Obtener la hora exacta
    const ahora = new Date();

    const hora = ahora.toLocaleTimeString("es-CO", {
        hour12: false
    });

    // Crear una nueva fila
    const fila = document.createElement("tr");

    // Crear las celdas
    const celdaNumero = document.createElement("td");
    const celdaHora = document.createElement("td");

    // Asignar los valores
    celdaNumero.textContent = likes;
    celdaHora.textContent = hora;

    // Agregar las celdas a la fila
    fila.appendChild(celdaNumero);
    fila.appendChild(celdaHora);

    // Insertar el registro al principio de la tabla
    tabla.prepend(fila);

});
