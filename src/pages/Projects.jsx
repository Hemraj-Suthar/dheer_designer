import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";

const Projects = () => {
    return (
        <main className="max-w-screen-2xl container mx-auto px-4 text-white">
            <ProjectList/>
        </main>
    );
};

export default Projects;