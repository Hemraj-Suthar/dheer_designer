import React from "react";
import projects from "./Projects.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    return (
        <>
            <section className="max-w-screen-2xl container mx-auto md:px-20">
                <div className="banner" style={{ backgroundImage: `url(${project.bannerImage})` }}></div>
                <div className="description text-white">
                    <h2 className="text-2xl">{project.title}</h2>
                    <p className="mt-4">{project.fullDescription}</p>
                </div>
                <div className="project-images">
                    {project.images.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`Project Image ${index + 1}`} className="project-image" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProjectDetail;



{/* <section>
<h2 className="text-2xl text-center text-white mb-6">Featured Projects</h2>
<div className="projects-container max-w-screen-2xl container mx-auto md:px-20 mb-10">
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
</section> */}
