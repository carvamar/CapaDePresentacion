// Generar 100 usuarios de ejemplo
const users = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@example.com`,
    status: i % 2 === 0 ? "Activo" : "Inactivo",
}));

const rowsPerPage = 10; // Usuarios por página
let currentPage = 1;

// Función para renderizar los usuarios en la tabla
const renderUsers = (page = 1) => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const visibleUsers = users.slice(startIndex, endIndex);

    const tableBody = document.getElementById("userTable");
    tableBody.innerHTML = visibleUsers
        .map(user => `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
            <td>
              <button class="btn btn-sm btn-warning">Editar</button>
              <button class="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
        `)
        .join("");
};

// Función para renderizar los botones de paginación
const renderPagination = () => {
    const totalPages = Math.ceil(users.length / rowsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
          <li class="page-item ${i === currentPage ? "active" : ""}">
            <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
          </li>
        `;
    }
};

// Función para cambiar de página
const changePage = (page) => {
    currentPage = page;
    renderUsers(page);
    renderPagination();
};

// Inicializar tabla y paginación
renderUsers(currentPage);
renderPagination();