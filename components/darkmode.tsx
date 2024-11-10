"use client";

import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const Darkmode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div 
            className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-700 ${darkMode ? 'bg-[#121212]' : 'bg-gray-400'}`} // Change background color
            onClick={() => setDarkMode(!darkMode)}
        >
            <FaMoon className={`text-white transition-colors duration-700`} size={18} /> {/* Moon icon */}
            <div 
                className='absolute bg-white w-6 h-6 rounded-full shadow-md transition-all duration-700'
                style={{ left: darkMode ? "2px" : "calc(100% - 28px)" }} // Adjust the right position calculation
            />
            <BsSunFill className={`ml-auto transition-colors duration-700  text-yellow-400`} size={18} /> {/* Sun icon */}
        </div>
    );
};

export default Darkmode;
