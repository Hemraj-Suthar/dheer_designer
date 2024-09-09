import React from 'react';
import projects from './Projects.jsx';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    return (
        <main className='projects-container'>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </main>
    )
}

export default ProjectList;