import React from "react";

function Footer() {
    return (
        <>
            <hr />
            <div className="max-w-screen-2xl container mx-auto md:px-20">
                <footer className="footer footer-center text-base-content rounded py-10 text-white">
                    <div className="flex justify-between items-center w-full">
                        {/* Left side - Logo */}
                        <div className="flex items-center">
                            <div className="logo">
                                <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
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
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
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
        </>
    );
}

export default Footer;
