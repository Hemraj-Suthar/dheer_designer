import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    return (
        <div className="card">
            <Link to={`/project/${project.id}`} className='project-card'>
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                    <h2 className="card-title text-3xl">{project.title}</h2>
                    <p className="card-text">{project.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard;