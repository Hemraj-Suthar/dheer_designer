import React, { useState, useRef } from "react";
import projects from "./Projects.jsx";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const ProjectDetail = () => {
    const { id } = useParams();
    const swiperRef = useRef(null);
    const [isSwiperOpen, setIsSwiperOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const lastPos = useRef({ x: 0, y: 0 });

    const toggleZoom = () => {
        setZoomed(!zoomed);
        setDragOffset({ x: 0, y: 0 }); // reset on toggle
    };

    const handlePointerDown = (e) => {
        if (!zoomed || e.button !== 0) return; // Only allow left-click
        isDragging.current = true;
        lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
        if (!zoomed || !isDragging.current) return;

        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;

        setDragOffset((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
        }));

        lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
        isDragging.current = false;
    };
    
    const handleClick = (i) => {
        setInitialSlide(i);
        setIsSwiperOpen(true);
    };
    
    const handleClose = () => {
        setIsSwiperOpen(false);
    };
    
    const project = projects.find((p) => p.id === parseInt(id));

    return (
        <>
            {!isSwiperOpen ? (
                <section className="max-w-screen-2xl container mx-auto md:px-20">
                    <div className="description text-black font-bold">
                        <h2 className="text-3xl">{project.title}</h2>
                        <p className="mt-4">{project.fullDescription}</p>
                    </div>
                    <div className="project-images">
                        {project.images.map((img, index) => (
                            <div key={index} className="h-64 w-full overflow-hidden cursor-pointer rounded-lg" onClick={() => handleClick(index)}>
                                <img src={img} alt={`Project Image ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>
            ) : (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-200 z-50 select-none">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 z-50 text-black text-2xl font-bold"
                    >
                        ✕
                    </button>

                    <button
                        onClick={toggleZoom}
                        className="absolute top-4 right-20 z-50 text-black text-2xl font-bold"
                        title={zoomed ? "Reset Zoom" : "Zoom"}
                    >
                        🔍
                    </button>

                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            swiper.slideTo(initialSlide);
                        }}
                        modules={[Navigation, Pagination]}
                        initialSlide={initialSlide}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ type: "fraction" }}
                        allowTouchMove={!zoomed}
                        className="w-full h-full"
                    >
                        {project.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="w-full h-full flex justify-center items-center py-8 overflow-hidden"
                                    onPointerDown={handlePointerDown}
                                    onPointerMove={handlePointerMove}
                                    onPointerUp={handlePointerUp}
                                    onPointerLeave={handlePointerUp}
                                >
                                    <img
                                        src={img}
                                        alt={`Project Image ${index + 1}`}
                                        className="object-contain transition-transform duration-300"
                                        style={{
                                        transform: zoomed
                                            ? `scale(2) translate(${dragOffset.x}px, ${dragOffset.y}px)`
                                            : "scale(1)",
                                        cursor: zoomed ? "grab" : "zoom-in",
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        userSelect: "none",
                                        pointerEvents: "auto",
                                        }}
                                        draggable={false}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
               )
            }
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
