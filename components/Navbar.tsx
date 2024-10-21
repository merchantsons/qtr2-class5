"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ name, msg }: { name: string, msg: string }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
    const handleLinkClick = () => { setIsMenuOpen(false); }; // Close the menu when a link is clicked


    return (
        <div className="headerback sticky top-0 z-50 bg-sky-900 text-white font-poppins">
            {/* Full navbar for larger screens */}
            <div className="hidden md:flex justify-between items-center mx-auto p-5 w-[85vw]">
                <a href="/"><div className='-mt-5 logo52'></div></a>
                <ul className="flex space-x-8 justify-center">
                    <li><Link href="/" className="text-sm font-bold text-white pr-6 pl-6 pt-2 pb-2  hover:bg-yellow-600 hover:text-white rounded">Home</Link></li>
                    <li><Link href="/hooks" className="text-sm font-bold text-white pr-6 pl-6 pt-2 pb-2  hover:bg-yellow-600 hover:text-white rounded">Hooks</Link></li>
                    <li><Link href="#" className="text-sm font-bold text-white pr-6 pl-6 pt-2 pb-2  hover:bg-yellow-600 hover:text-white rounded">Location</Link></li>
                    <li><Link href="#" className="text-sm font-bold text-white pr-6 pl-6 pt-2 pb-2  hover:bg-yellow-600 hover:text-white rounded">Contact</Link></li>
                    <li><Link href="#" className="text-sm font-bold text-white pr-6 pl-6 pt-2 pb-2  hover:bg-yellow-600 hover:text-white rounded">{msg}{name}</Link></li>
                </ul>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="md:hidden flex justify-between items-center p-4">
                <a href="/"><div className='-mt-5 logo52'></div></a><div className='text-xs'>{msg}{name}</div>
                <button onClick={toggleMenu} className="text-white text-2xl">
                    {/* Hamburger icon */}
                    {isMenuOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Dropdown menu for small screens */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-[43vw] bg-sky-700 shadow-lg text-center">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-white border-2 border-red-900 p-2 rounded-lg">
                            ✖
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-4 p-5">
                        <div className='bg-black border-red-900 text-white'>SITE MENU</div>
                        <li><Link href="/" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link href="/hooks" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Hooks</Link></li>
                        <li><Link href="#" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Location</Link></li>
                        <li><Link href="#" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Contact</Link></li>
                        <li><Link href="#" className="font-semibold text-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Login</Link></li>
                    </ul>                    
                </div>
            )}

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }

                .logo {
                    width: 100px;
                    height: 50px;
                    background-image: url('/logo.gif'); 
                    background-size: contain;
                    background-repeat: no-repeat;
                }

                button {
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default Navbar;