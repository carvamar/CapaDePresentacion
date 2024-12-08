


/*Funcion para simular acceso denegado*/

// Seleccionamos el botón y el mensaje de alerta
const btnAccesoDenegado = document.querySelector("#btnAccesoDenegado");
const alertaAccesoDenegado = document.querySelector("#accesoDenegado");

// Agregamos un evento al botón para mostrar el mensaje
btnAccesoDenegado.addEventListener("click", function () {
    alertaAccesoDenegado.classList.remove("d-none"); // Mostrar mensaje
    setTimeout(() => {
        alertaAccesoDenegado.classList.add("d-none"); // Ocultar mensaje después de 3 segundos
    }, 3000);
});

