



function desactivarUsuario() {
    alert('La cuenta ha sido desactivada.');
}

// Función para validar el formulario
function validateForm() {
    // Obtener el valor del correo
    var email = document.getElementById("userEmail").value;
    var emailError = document.getElementById("emailError");

    // Expresión regular para validar el formato del correo
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validación del correo
    if (!emailPattern.test(email)) {
        emailError.style.display = "block"; // Mostrar error de correo
        return false; // Evitar que se envíe el formulario
    } else {
        emailError.style.display = "none"; // Ocultar mensaje de error
    }

    // Simular que los cambios se han guardado correctamente
    document.getElementById("successMessage").style.display = "block"; // Mostrar el mensaje de éxito
    setTimeout(function () {
        document.getElementById("successMessage").style.display = "none"; // Ocultar mensaje después de 3 segundos
    }, 3000);

    // Simular el guardado (en producción esto enviaría los datos al servidor)
    console.log("Datos guardados correctamente"); // Aquí se enviaría el formulario real en el servidor

    return false; // Para evitar que el formulario se envíe (simulación)
}

// Función para simular la eliminación del usuario
function deleteUser() {
    

    // Simulando la eliminación con un mensaje de éxito
    document.getElementById("deleteSuccessMessage").style.display = "block"; // Mostrar mensaje de éxito

    // Simular la eliminación de un usuario (en producción, llamarías al servidor aquí)
    console.log("Usuario eliminado correctamente");

    // Ocultar el mensaje de éxito después de 3 segundos
    setTimeout(function () {
        document.getElementById("deleteSuccessMessage").style.display = "none";
    }, 3000);

    // Cerrar el modal
    $('#deleteModal').modal('hide');
}