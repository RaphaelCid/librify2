
import Carousel from '../components/carousel'

export default function Home() {
  return (
    <>
      <div>
            <main className="flex p-5 flex-col items-center justify-center  dark:bg-[#121212]">
              <Carousel />
            </main>
          </div>
      {/* Contenido principal */}
      <div className="min-h-screen flex flex-col dark:bg-[#121212]">
        <div className="container mx-auto">
          <nav className="bg-gray-100 p-4 rounded-lg shadow dark:bg-[#232323]">
            <form className="flex items-center justify-center space-x-2 ">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  className="w-full p-2 pl-10 pr-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-[#727272] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Buscar Libros..."
                />
                </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Buscar
              </button>
            </form>
          </nav>
          
        </div>

        <div className="container mx-auto ">
          <div>
          <form className="max-w-sm mx-auto m-5">
                <select id="genero" className="focus:ring-1 focus:ring-blue-300 bg-white-50 border focus:outline-none border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 dark:bg-[#727272] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Categoria</option>
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
              </form>
              </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            id="contenido"
          ></div>
        </div>
      </div>
    </>
  );
}
