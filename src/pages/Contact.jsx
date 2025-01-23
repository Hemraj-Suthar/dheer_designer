import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <main className="max-w-4xl mx-auto px-4 py-16 text-white">
            <h1 className="text-4xl font-bold text-center mb-12">I'd love to hear from you!!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="rounded-lg border text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 bg-zinc-900 border-zinc-800">
                    <div className="flex items-center space-x-4 p-6">
                        <div className="h-12 w-12 rounded-full bg-red-600/10 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-mail h-6 w-6 text-red-600"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Email</h2>
                            <a href="mailto:praveenjangid5003@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                                praveenjangid5003@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 bg-zinc-900 border-zinc-800">
                    <div className="flex items-center space-x-4 p-6">
                        <div className="h-12 w-12 rounded-full bg-red-600/10 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-phone h-6 w-6 text-red-600"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Phone</h2>
                            <a href="tel:+917665105003" className="text-zinc-400 hover:text-white transition-colors">
                                +917665105003
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Lets work together on your next project</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                    Collaboration is key! Lets join forces and combine our skills to tackle your next project with a powerful synergy that guarantees success
                </p>
            </section>
        </main>
    );
};

export default Contact;
