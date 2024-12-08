// Manejo del formulario
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulación del proceso de creación
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    if (username && email && role) {
        // Mostrar mensaje de éxito
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('d-none');
        successMessage.innerText = `Cuenta para ${username} creada correctamente. Un correo fue enviado a ${email}.`;

        // Limpiar el formulario
        document.getElementById('userForm').reset();
    }
});