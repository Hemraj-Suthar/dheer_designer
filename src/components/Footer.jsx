import React from "react";
import Dheer_logo from '../assets/Dheer_logo.png';

function Footer() {
    return (
        <>
            <hr />
            <div className="bg-[#a98467] w-full">
                <div className="max-w-screen-2xl container mx-auto md:px-20">
                    <footer className="footer footer-center text-base-content rounded py-10 text-black">
                        <div className="flex justify-between items-center w-full">
                            {/* Left side - Logo */}
                            <div className="flex items-center">
                                <div className="logo">
                                     <img src={Dheer_logo} alt="Logo" className="w-[80px] h-[80px] object-contain" />
                                </div>
                            </div>

                            {/* Right side - Social Media Icons */}
                            <div className="flex gap-4">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M12 2.163c3.21 0 3.588.012 4.85.07 1.158.059 2.207.254 3.037 1.084.83.83 1.025 1.88 1.084 3.037.058 1.262.07 1.64.07 4.85 0 3.21-.012 3.588-.07 4.85-.059 1.158-.254 2.207-1.084 3.037-.83.83-1.88 1.025-3.037 1.084-1.262.058-1.64.07-4.85.07-3.21 0-3.588-.012-4.85-.07-1.158-.059-2.207-.254-3.037-1.084-.83-.83-1.025-1.88-1.084-3.037-.058-1.262-.07-1.64-.07-4.85 0-3.21.012-3.588.07-4.85.059-1.158.254-2.207 1.084-3.037.83-.83 1.88-1.025 3.037-1.084 1.262-.058 1.64-.07 4.85-.07zm0-2.163c-3.3 0-3.71.012-5.02.072-1.256.059-2.396.271-3.295 1.17-.899.899-1.112 2.039-1.171 3.295-.06 1.31-.072 1.72-.072 5.02 0 3.3.012 3.71.072 5.02.059 1.256.271 2.396 1.171 3.295.899.899 2.039 1.112 3.295 1.17 1.31.06 1.72.072 5.02.072 3.3 0 3.71-.012 5.02-.072 1.256-.059 2.396-.271 3.295-1.17.899-.899 1.112-2.039 1.171-3.295.06-1.31.072-1.72.072-5.02 0-3.3-.012-3.71-.072-5.02-.059-1.256-.271-2.396-1.171-3.295-.899-.899-2.039-1.112-3.295-1.17-1.31-.06-1.72-.072-5.02-.072zM12 5.838c-3.369 0-6.162 2.794-6.162 6.162 0 3.369 2.794 6.162 6.162 6.162 3.368 0 6.162-2.794 6.162-6.162 0-3.368-2.794-6.162-6.162-6.162zm0 10.774c-2.591 0-4.612-2.021-4.612-4.612 0-2.591 2.021-4.612 4.612-4.612 2.591 0 4.612 2.021 4.612 4.612 0 2.591-2.021 4.612-4.612 4.612zm6.406-9.193c-.748 0-1.352-.604-1.352-1.352 0-.748.604-1.352 1.352-1.352.748 0 1.352.604 1.352 1.352 0 .748-.604 1.352-1.352 1.352z"></path>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        <path d="M20.447 20.452h-3.551v-5.568c0-1.323-.027-3.029-1.844-3.029-1.848 0-2.13 1.441-2.130 2.927v5.67h-3.552v-11.47h3.414v1.558h.048c.477-.9 1.64-1.85 3.365-1.85 3.592 0 4.251 2.366 4.251 5.44v6.418zm-16.07-11.47h3.415v11.47h-3.415v-11.47zm1.708-5.028c-1.09 0-1.967.883-1.967 1.97 0 1.087.877 1.97 1.967 1.97 1.089 0 1.967-.883 1.967-1.97 0-1.087-.878-1.97-1.967-1.97zm1.708 1.97c0 .944-.768 1.705-1.708 1.705-.941 0-1.708-.761-1.708-1.705 0-.943.767-1.705 1.708-1.705.94 0 1.708.762 1.708 1.705z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Optional Footer Text (Copyright) */}
                        <aside>
                            <p>Copyright © {new Date().getFullYear()} - All right reserved Dheer Designer</p>
                        </aside>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Footer;
