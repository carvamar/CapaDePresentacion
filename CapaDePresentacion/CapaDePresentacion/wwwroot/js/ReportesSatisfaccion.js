



// Manejador de selección de módulo
    document.getElementById('moduleSelect').addEventListener('change', function () {
          const selected = this.value;
    const employeeFilter = document.getElementById('employeeFilter');
    if (selected === 'individual') {
        employeeFilter.classList.remove('d-none');
          } else {
        employeeFilter.classList.add('d-none');
          }
        });

    // Simulación de generación de informe
    document.getElementById('generateReport').addEventListener('click', function () {
          const module = document.getElementById('moduleSelect').value;
    const employee = document.getElementById('employeeSelect').value;
    const reportContent = document.getElementById('reportContent');
    const reportArea = document.getElementById('reportArea');

    let report = '';
    if (module === 'general') {
        report = '<p>Informe general de satisfacción del cliente.</p>';
          } else if (module === 'individual') {
        report = `<p>Informe de satisfacción para el empleado ${employee}.</p>`;
          } else if (module === 'grafico') {
        report = '<p>Gráfico de métricas de satisfacción.</p>';
          }

    reportContent.innerHTML = report;
    reportArea.classList.remove('d-none');
        });

