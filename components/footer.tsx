import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/Librify/" },  // URL de Facebook
    { icon: <AiOutlineTwitter />, link: "https://twitter.com/Librify" }, // URL de Twitter
    { icon: <AiFillYoutube />, link: "https://www.mercadolibre.com/Librify" },   // URL de YouTube
    { icon: <AiFillInstagram />, link: "https://www.instagram.com/Librify/" } // URL de Pinterest
  ];
  return (
    <>
      <footer className="bg-[#251d1b] text-white py-5 dark:bg-[#232323] dark:text-gray-200">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Sección de redes sociales */}
        <div className="p-2">
          <p className="text-lg font-semibold mb-2">¡Síguenos en redes sociales!</p>
          <ul className="flex space-x-7 mt-3">
            {iconsTab.map(({ icon, link }, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"  // Abre el enlace en una nueva pestaña
                  rel="noopener noreferrer"  // Mejora la seguridad
                  className="text-white dark:text-gray-200 dark:hover:bg-[#3a3a3a] text-2xl hover:text-gray-400 transition duration-300"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-10 dark:text-gray-200">Privacy Policy | © {new Date().getFullYear()} Librify</p>
        </div>

        {/* Información de contacto */}
        <div className="text-center md:text-left mt-4 md:mt-10">
          <p className="text-sm">Librify@Librify.cl</p>
          <p className="text-sm">+569 3244992123</p>
          <p className="text-sm">Av. 21 de Mayo 701, 4441187 Los Angeles, Bío Bío</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;