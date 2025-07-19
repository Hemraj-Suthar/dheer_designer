import React, { useEffect, useState } from "react";
import Dheer_logo from '../assets/Dheer_logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

      // Toggle the menu open/close state
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const navItems = (
        <>
            <li className="p-2">
                <a href="/">Home</a>
            </li>
            <li className="p-2">
                <a href="/projects">Projects</a>
            </li>
            <li className="p-2">
                <a href="/contact">Contact Us</a>
            </li>
            <li className="p-2">
                <a href="/about">About Us</a>
            </li>
        </>
    );

    return (
        <div className="bg-[#a98467] w-full">
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="navbar flex justify-between items-center py-4 text-black">
                    {/* Logo on the left */}
                    <div className="navbar-start">
                        <div className="logo">
                            <img src={Dheer_logo} alt="Logo" className="w-[80px] h-[80px] object-contain" />
                        </div>
                    </div>

                    {/* Nav items on the right */}
                    <div className="navbar-end font-bold">
                        <ul className="menu menu-horizontal p-0 hidden lg:flex">{navItems}</ul>
                    </div>

                    {/* Dropdown for mobile view */}
                    <div className="navbar-start lg:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} 
                                className={`menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box ${isOpen ? 'block' : 'hidden'}`}
                            >
                                {navItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;

// return (
//     <>
//         <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//             <div className="navbar">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                             {navItems}
//                         </ul>
//                     </div>
//                 </div>
//                 {/* <div className="navbar-end space-x-3">
//                     <div className="navbar-center hidden lg:flex">
//                         <ul className="menu menu-horizontal px-1">{navItems}</ul>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     </>
// );