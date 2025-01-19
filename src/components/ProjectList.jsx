import React from "react";
import projects from "./Projects.jsx";
import { Link } from "react-router-dom";
import HeroBanner from "./HeroBanner.jsx";

const ProjectList = () => {
    return (
        <>
            <HeroBanner />
            <section>
                <h2 className="text-2xl text-center text-white mb-6">Featured Projects</h2>
                <div className="projects-container max-w-screen-2xl container mx-auto md:px-20">
                    {projects.map((project) => (
                        <div key={project.id} className="card">
                            <Link to={`/project/${project.id}`} className="project-card">
                                <img src={project.image} alt={project.title} />
                                <div className="overlay">
                                    <h2 className="card-title text-3xl">{project.title}</h2>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Lets work together on your next project</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">Looking forward to help you bring and provide my skills to solve your next project with a great UI/UX design.</p>
                <a className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded inline-block text-center" href="/contact">
                    Contact me
                </a>
            </section>
        </>
    );
};

export default ProjectList;
