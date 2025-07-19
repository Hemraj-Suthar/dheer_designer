import React from "react";

const HeroBanner = () => {

    return (
        <>
            <section className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6">DHEER VISUAL STUDIO</h1>
                <p className="mb-8 max-w-2xl mx-auto">Looking forward to help you bring and provide my skills to solve your next project with a great UI/UX design.</p>
                <a className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-2xl inline-block text-center" href="/contact">
                    Contact me
                </a>
            </section>
        </>
    );
};

export default HeroBanner;
