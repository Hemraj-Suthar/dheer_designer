import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";

const Projects = () => {
    return (
        <main className="max-w-screen-2xl container mx-auto px-4 py-12 text-black">
            <ProjectList/>
        </main>
    );
};

export default Projects;