"use client";
import React, { useState } from 'react';

// Importa las funciones de login y signup que manejan la lógica en el servidor
import { login, signup } from './actions';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // Estado para determinar si estamos en "login" o "registro"

  const toggleForm = () => {
    setIsLogin(!isLogin); // Cambia entre los formularios de login y registro
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Crea un FormData con los datos del formulario

    if (isLogin) {
      await login(formData); // Llama a la función de login si estamos en el formulario de login
    } else {
      await signup(formData); // Llama a la función de signup si estamos en el formulario de registro
    }
  };

  return (
    <div className="flex justify-center items-center p-5 bg-gray-100 dark:bg-[#121212]">
      <div className="bg-white p-5 rounded-lg shadow-lg border border-red-200 max-w-md w-full dark:bg-[#232323]">
        <header>
          <h1 className="text-center text-xl font-bold " id="form-title">
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'} {/* Cambia el título */}
          </h1>
        </header>
        <main>
          <section>
            <form
              id="formulario-login-register"
              className="flex flex-col mt-5"
              onSubmit={handleSubmit} // Llama a handleSubmit para manejar la acción del formulario
            >
              <label htmlFor="email" className="mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 mb-4 border border-gray-300 rounded dark:text-black"
              />

              <label htmlFor="password" className="mb-2">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="p-2 mb-4 border border-gray-300 rounded dark:text-black"
              />

              <button
                type="submit"
                className="p-2 rounded bg-[#6b4226] text-white hover:bg-[#31231a] transition"
              >
                {isLogin ? 'Ingresar' : 'Registrarse'} {/* Cambia el texto del botón */}
              </button>
            </form>
            <div
              className="text-center mt-3 cursor-pointer text-blue-500"
              id="toggle-link"
              onClick={toggleForm} // Cambia el estado para alternar entre login y registro
            >
              {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes cuenta?'} {/* Cambia el texto del enlace */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
