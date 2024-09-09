import React from 'react';
import projects from './Projects.jsx';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    return (
        <div>
            <main>
                <div className="banner" style={{ backgroundImage: `url(${project.bannerImage})` }}></div>
                <div className="description">
                    <h2>{project.title}</h2>
                    <p>{project.fullDescription}</p>
                </div>
                <div className="project-images">
                    {project.images.map((img, index) => (
                        <div>
                            <img key={index} src={img} alt={`Project Image ${index + 1}`} className="project-image" />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default ProjectDetail;