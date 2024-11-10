import React from 'react';

export default function UsersPage() {
  return (
    <div >
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <img
          src="../../static/img/logogandalf.png" // Asegúrate de que la ruta sea correcta
          alt="Logo de la biblioteca"
          className="max-h-12"
        />
        <h1 className="ml-4 text-3xl font-bold">Formulario de Gestión de Usuarios</h1>
      </div>

      <main className="flex">
        <div className="flex-1 p-4">
          <div className="overflow-auto">
            <table className="min-w-full text-white table table-bordered table-hover bg-[#6b4226]">
              <thead className="table-header-custom">
                <tr>
                  <th className="border dark:border-black px-4 py-2 text-center">Email</th>
                  <th className="border dark:border-black px-4 py-2 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody id="contenido">
                {/* Aquí irán las filas con los datos */}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="../src/js/admin/libros.js" type="module"></script>
      <script src="../src/js/admin/verifica.js"></script>
    </div>
    </div>
  );
};
