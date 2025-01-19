import React, { useEffect, useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);  // Toggle the menu open/close state
    };

    const navItems = (
        <>
            <li className="p-2">
                <a href="/">Home</a>
            </li>
            <li className="p-2">
                <a href="/course">Project</a>
            </li>
            <li className="p-2">
                <a href="/contact">Contact</a>
            </li>
            <li className="p-2">
                <a href="/about">About</a>
            </li>
        </>
    );

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="navbar flex justify-between items-center py-4">
                {/* Logo on the left */}
                <div className="navbar-start">
                    <div className="logo">
                        <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
                    </div>
                </div>

                {/* Nav items on the right */}
                <div className="navbar-end text-white">
                    <ul className="menu menu-horizontal p-0 hidden lg:flex">{navItems}</ul>
                </div>

                {/* Dropdown for mobile view */}
                <div className="navbar-start text-white lg:hidden">
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