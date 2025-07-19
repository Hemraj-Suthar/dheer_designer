import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";

const About = () => {
    return (
        <main className="max-w-4xl mx-auto px-4 py-16 text-black">
            <section className="about-us flex items-center">
                <div className="about-container flex items-center p-8">
                    {/* <div className="about-image mr-8">
                        <img src="your-image-url.jpg" alt="About Us" className="w-64 h-auto rounded-lg" />
                    </div> */}
                    <div className="about-text flex-1">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-12 text-center">About Us</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are a passionate team dedicated to providing high-quality products and services. Our mission is to exceed customer expectations with innovation and commitment. Learn
                            more about who we are and what drives us!
                        </p>
                    </div>
                </div>
            </section>
            {/* <ProjectList/> */}
        </main>
    );
};

export default About;
