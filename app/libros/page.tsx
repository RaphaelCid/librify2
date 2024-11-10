"use client";
import React, { useState, useEffect } from 'react';
import { enviarLibro, obtenerLibros } from './libros'; // Importar las funciones

export default function BooksPage() {
  const [libros, setLibros] = useState<any[]>([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [imagen, setImagen] = useState<File | null>(null);
  const [genero, setGenero] = useState('');
  const [cantidad, setCantidad] = useState(0);

  // Cargar los libros desde Supabase
  useEffect(() => {
    const cargarLibros = async () => {
      const data = await obtenerLibros();
      setLibros(data);
    };
    cargarLibros();
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await enviarLibro(titulo, autor, imagen, genero, cantidad);
    if (success) {
      // Recargar los libros después de agregar uno nuevo
      const data = await obtenerLibros();
      setLibros(data);
      // Limpiar el formulario
      setTitulo('');
      setAutor('');
      setGenero('');
      setCantidad(0);
      setImagen(null);
    }
  };

  // Función para manejar la selección de imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImagen(e.target.files[0]);
      const preview = document.getElementById('img-preview') as HTMLImageElement;
      preview.style.display = 'block';
      preview.src = URL.createObjectURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-6">
          <img src="../../static/img/logogandalf.png" alt="Logo de la biblioteca" className="max-h-12" />
          <h1 className="ml-4 text-3xl font-bold">Formulario de Gestión de Libros</h1>
        </div>

        <main className="flex">
          <div className="flex-1 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow dark:bg-[#232323]">
              <div className="mb-4">
                <label className="font-semibold block font-medium dark:text-white" htmlFor="titulo">
                  Título del Libro
                </label>
                <input
                  className="focus:ring-1 focus:ring-blue-300 border focus:outline-none mt-1 block w-full border-gray-300 rounded-md p-2 dark:bg-[#727272] dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="titulo"
                  id="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="font-semibold block font-medium dark:text-white" htmlFor="autor">
                  Autor
                </label>
                <input
                  className="focus:ring-1 focus:ring-blue-300 border focus:outline-none mt-1 block w-full border-gray-300 rounded-md p-2 dark:bg-[#727272] dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="autor"
                  id="autor"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="font-semibold block font-medium dark:text-white" htmlFor="imagen">
                  Imagen del Libro
                </label>
                <input
                  type="file"
                  id="imagen"
                  className="focus:ring-1 focus:ring-blue-300 border focus:outline-none mt-1 block w-full border-gray-300 rounded-md p-2 dark:bg-[#727272] dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleImageChange}
                />
                <img id="img-preview" style={{ display: 'none', maxHeight: '100px' }} alt="Image Preview" className="mt-2" />
              </div>

              <div className="mb-4">
                <label className="font-semibold block font-medium dark:text-white" htmlFor="genero">
                  Género
                </label>
                <select
                  className="focus:ring-1 focus:ring-blue-300 border focus:outline-none mt-1 block w-full border-gray-300 rounded-md p-2 dark:bg-[#727272] dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="genero"
                  name="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                >
                  <option value="">Seleccione un género</option>
                  <option value="Ficción">Ficción</option>
                  <option value="No Ficción">No Ficción</option>
                  <option value="Misterio">Misterio</option>
                  <option value="Fantasía">Fantasía</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Romance">Romance</option>
                  <option value="Biografía">Biografía</option>
                  <option value="Histórico">Histórico</option>
                  <option value="Infantil">Infantil</option>
                  <option value="Juvenil">Juvenil</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="font-semibold block font-medium dark:text-white" htmlFor="cantidad">
                  Cantidad
                </label>
                <input
                  className="focus:ring-1 focus:ring-blue-300 focus:outline-none mt-1 block w-full border border-gray-300 rounded-md p-2 dark:bg-[#727272] dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                />
              </div>

              <div className="flex justify-start space-x-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Agregar Libro
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 p-4">
            <h2 className="font-semibold text-xl">Lista de Libros</h2>
            <ul>
              {libros.map((libro: any) => (
                <li key={libro.id}>
                  <h3>{libro.titulo}</h3>
                  <p>Autor: {libro.autor}</p>
                  <p>Género: {libro.genero}</p>
                  <p>Cantidad: {libro.cantidad}</p>
                  {libro.imagen_url && (
                    <img src={`https://your-supabase-url/storage/v1/object/public/${libro.imagen_url}`} alt="Imagen del libro" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
