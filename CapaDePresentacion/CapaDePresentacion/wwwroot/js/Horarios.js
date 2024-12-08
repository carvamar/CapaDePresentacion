
    // Inicialización del Calendario
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: [
                { title: 'Turno Mañana', start: '2024-12-10T08:00:00', end: '2024-12-10T12:00:00' },
                { title: 'Turno Tarde', start: '2024-12-10T13:00:00', end: '2024-12-10T17:00:00' }
            ]
        });
    });

    // Aplicar filtros
    function applyFilters() {
      const turno = document.getElementById('filterTurno').value;
    const fecha = document.getElementById('filterFecha').value;

    // Lógica para aplicar filtros, por ejemplo, mostrando turnos que coincidan
    alert(`Filtros aplicados: Turno: ${turno}, Fecha: ${fecha}`);
    }

    // Cambiar Turno (simulación)
    function changeTurn(turnoId) {
        alert(`Cambiar turno con ID: ${turnoId}`);
      // Aquí puedes abrir un modal o formulario para cambiar el turno.
    }


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener el nuevo horario ingresado
    const nuevoHorario = document.getElementById('horario').value;

    // Actualizar la vista del horario en el perfil del empleado
    document.getElementById('horarioEmpleado').textContent = nuevoHorario;

    // Mostrar mensaje de éxito
    const mensaje = document.getElementById('mensajeActualizacion');
    mensaje.classList.remove('d-none');

    // Limpiar el formulario
    document.getElementById('horario').value = '';
});



document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita que el formulario se envíe de la manera convencional

    // Mostrar la notificación de éxito
    document.getElementById('notification').style.display = 'block';

    // Opcional: Simular el envío de una notificación (por ejemplo, mediante una solicitud AJAX o actualización de base de datos)
    setTimeout(function () {
        // Ocultar la notificación después de 5 segundos
        document.getElementById('notification').style.display = 'none';
    }, 5000);
});