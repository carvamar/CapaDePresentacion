


function setObservation(observation) {
    document.getElementById('modalObservationText').textContent = observation;
}


        // Función para mostrar el resumen de la cita
function showSummary(horario, terapeuta, servicio) {
        // Rellenar el resumen con los datos seleccionados
    document.getElementById('resumenHorario').textContent = horario;
    document.getElementById('resumenTerapeuta').textContent = terapeuta;
    document.getElementById('resumenServicio').textContent = servicio;
        }

    // Función para confirmar la cita
function confirmarCita() {
    alert("Cita confirmada!");
    }


