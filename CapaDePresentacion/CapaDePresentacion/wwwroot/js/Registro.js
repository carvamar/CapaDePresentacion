
/*PARA MOSTRAR EL TOAST QUE ES UNA NOTIFICACION EMERGENTE*/


    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

    // Aquí iría tu lógica para registrar al usuario, como una llamada a la API, etc.

    // Muestra el toast
    var toast = new bootstrap.Toast(document.getElementById('emailToast'));
        toast.show();

        /*Redirige después de que el toast se haya cerrado*/

     toast._element.addEventListener('hidden.bs.toast', function () {
           // Redirige a la página de inicio de sesión
         window.location.href = '/Home/IniciarSesion';  // Reemplaza '/login' con la ruta de tu página de inicio de sesión
     });
    });


// Manejo de errores con JavaScript PARA EL INICIO DE SESION

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario para simular la validación

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simulación de validación con condiciones
    if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
        // Caso de inicio de sesión exitoso
        window.location.href = '/Home/Index'; // Redirigir al usuario
    } else if (email !== 'usuario@ejemplo.com') {
        // Caso de correo no registrado
        showError('El correo electrónico no está registrado.');
    } else if (password !== 'contraseña123') {
        // Caso de contraseña incorrecta
        showError('La contraseña es incorrecta.');
    }
});

// Función para mostrar el mensaje de error
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.remove('d-none');
}

// Manejo del formulario de recuperación de contraseña
document.getElementById('recoverPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario para simular la acción de recuperación

    const recoverEmail = document.getElementById('recoverEmail').value;

    // Simulación de validación (puedes agregar más lógica aquí)
    if (recoverEmail) {
        // Mostrar mensaje de éxito
        document.getElementById('passwordRecoveryMessage').classList.remove('d-none');
        // Limpiar el campo de correo después de la solicitud
        document.getElementById('recoverEmail').value = '';
    }
});

    
