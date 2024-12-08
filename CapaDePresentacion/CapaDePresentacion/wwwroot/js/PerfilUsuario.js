
// JavaScript para manejar el formulario
  document.getElementById('reviewChanges').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const changesList = document.getElementById('changesList');
    changesList.innerHTML = `
      <li>Nombre: ${name || 'Sin cambios'}</li>
      <li>Teléfono: ${phone || 'Sin cambios'}</li>
      <li>Correo: ${email || 'Sin cambios'}</li>
    `;

    document.getElementById('changesSummary').classList.remove('d-none');
    document.getElementById('saveChanges').classList.remove('d-none');
  });

  document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cambios guardados exitosamente.');
    // Aquí puedes agregar una llamada AJAX para enviar datos al servidor.
  });