import React from 'react';

export default function LoansPage() {
  return (
    <div>
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <img
          src="../../static/img/logogandalf.png" // Ensure the path points to the public folder
          alt="Logo de la biblioteca"
          style={{ maxHeight: '50px' }}
        />
        <h1 className="ml-4 text-3xl font-bold">Formulario de Gestión de Préstamos</h1>
      </div>

      
        {/* Uncomment the form below if you plan to use it */}
        {/* <div className="container-fluid p-2">
          <form className="card p-4" id="formulario">
            <div className="m-1">
              <label className="form-label" htmlFor="nombreu">Nombre de Usuario</label>
              <input
                className="form-control"
                type="text"
                name="nombreu"
                id="nombreu"
                onBlur={(e) => console.log(e.target.id)}
              />
            </div>
            <div className="m-1">
              <label className="form-label" htmlFor="mail">Email</label>
              <input
                className="form-control"
                type="email"
                name="mail"
                id="mail"
                onBlur={(e) => console.log(e.target.id)}
              />
            </div>
            <div className="m-1">
              <label className="form-label" htmlFor="titulo">Título del Libro</label>
              <input
                className="form-control"
                type="text"
                name="titulo"
                id="titulo"
                onBlur={(e) => console.log(e.target.id)}
              />
            </div>
            <div className="m-1">
              <label className="form-label" htmlFor="fecha-prestamo">Fecha de Préstamo</label>
              <input
                className="form-control"
                type="date"
                id="fecha-prestamo"
                onBlur={(e) => console.log(e.target.id)}
              />
            </div>
            <div className="m-1">
              <label className="form-label" htmlFor="cantidad">Cantidad</label>
              <input
                className="form-control"
                type="number"
                id="cantidad"
                name="cantidad"
                onBlur={(e) => console.log(e.target.id)}
              />
            </div>
          </form>
          <div className="d-flex justify-content-left">
            <button className="btn btn-success m-5" id="btn-enviarprestamo" onClick={() => console.log('Enviar')}>
              Enviar
            </button>
            <button className="btn btn-warning m-5" id="btn-limpiarprestamo" onClick={handleClear}>
              Limpiar
            </button>
          </div>
        </div> */}

        <main className="flex">
          <div className="flex-1 p-4">
            <div className="overflow-auto">
            <table className="min-w-full table table-bordered table-hover bg-[#6b4226] text-white">
              <thead className="table-header-custom">
                <tr>
                  <th className="border dark:border-black px-4 py-2 text-center">Cantidad</th>
                  <th className="border dark:border-black px-4 py-2 text-center">Fecha</th>
                  <th className="border dark:border-black px-4 py-2 text-center">Libro</th>
                  <th className="border dark:border-black px-4 py-2 text-center">Usuario</th>
                </tr>
              </thead>
              <tbody id="contenido">
                {/* {loans.map((loan, index) => (
                  <tr key={index}>
                    <td>{loan.cantidad}</td>
                    <td>{loan.fecha}</td>
                    <td>{loan.libro}</td>
                    <td>{loan.usuario}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
            </div>
          </div>
        </main>
    </div>
    </div>
  );
};