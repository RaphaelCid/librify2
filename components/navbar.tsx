"use client";
import React, { useState, useEffect, useRef } from 'react';
import Darkmode from './darkmode'; // Asegúrate de importar tu componente Darkmode si es necesario
import { FiAlignJustify, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTableMenuOpen, setIsTableMenuOpen] = useState(false); // State for table menu visibility
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTableMenu = () => {
    setIsTableMenuOpen(!isTableMenuOpen); // Toggle table menu visibility
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
      setIsTableMenuOpen(false); // Close table menu when clicking outside
    }
  };

  useEffect(() => {
    if (isSidebarOpen || isTableMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, isTableMenuOpen]);

  return (
    <>
      <nav className="bg-[#352309] dark:bg-[#232323] flex relative">
        {/* Menú colapsable a la izquierda */}
        <div className="flex flex-col relative">
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center h-10 w-10 bg-[#352309] hover:bg-[#221706] dark:bg-[#232323] dark:hover:bg-[#121212] rounded-full mb-2 ml-4 mt-4"
          >
            <FiAlignJustify className="text-white h-6 w-6" />
          </button>
          {isSidebarOpen && (
            <div ref={sidebarRef} className="absolute left-0 top-16 w-48 bg-gray-800 rounded-md shadow-lg z-30">
              <div className="flex flex-col space-y-2 p-2 rounded-md bg-[#221706] dark:bg-[#121212]">
                <a href="/" className="text-white hover:bg-[#3d290b] dark:hover:bg-[#232323] rounded-lg px-3 py-2">Inicio</a>
                <a href="/FAQ" className="text-white hover:bg-[#3d290b] dark:hover:bg-[#232323] rounded-lg px-3 py-2">FAQ</a>
                <a href="/libros" className="text-white hover:bg-[#3d290b] dark:hover:bg-[#232323] rounded-lg px-3 py-2">Libros</a>
                <a href="/usuarios" className="text-white hover:bg-[#3d290b] dark:hover:bg-[#232323] rounded-lg px-3 py-2">Usuarios</a>
                <a href="/prestamos" className="text-white hover:bg-[#3d290b] dark:hover:bg-[#232323] rounded-lg px-3 py-2">Préstamos</a>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 flex-1">
        <span className="self-center text-2xl font-bold whitespace-nowrap text-white" style={{ fontFamily: 'Roboto Serif, serif' }}>
        Librify
        </span>


          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button 
              onClick={toggleTableMenu} 
              className='flex items-center justify-center h-10 w-10 bg-[#352309] hover:bg-[#221706] dark:bg-[#232323] dark:hover:bg-[#121212] rounded-full'
            >
              <FiUser className="text-white h-6 w-6" />
            </button>
            <a>
              <Darkmode />
            </a>
            <button className="bg-[#269026] hover:bg-[#154815] text-white text-base font-bold py-2 px-4 rounded-full focus:ring-2 focus:ring-lime-900 focus:outline-none">
              <a href="/login">
                Inicia Sesión
              </a>
            </button>
          </div>
        </div>
      </nav>

      {/* Collapsible Table Menu */}
      {isTableMenuOpen && (
        <div className="absolute right-0 top-16 w-80 bg-gray-800 rounded-md shadow-lg z-30">
          <div className="flex flex-col p-2 rounded-md bg-[#221706] dark:bg-[#121212]">
            <div className="overflow-auto">
              <table className="min-w-full text-white table table-bordered table-hover bg-[#6b4226]">
                <thead className="table-header-custom">
                  <tr>
                    <th className="border dark:border-black px-2 py-1 text-center">Libro</th>
                    <th className="border dark:border-black px-2 py-1 text-center">Fecha de Préstamo</th>
                    <th className="border dark:border-black px-2 py-1 text-center">Fecha Límite Devolución</th>
                  </tr>
                </thead>
                <tbody id="contenido">
                  {/* Aquí irán las filas con los datos */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
