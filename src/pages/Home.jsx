import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import ProjectList from "../components/ProjectList";

const Home = () => {
    return (
        // <div className="container mx-auto md:px-20"></div>
        <main className="max-w-screen-2xl container mx-auto px-4 text-white">
            <HeroBanner/>
            <ProjectList/>
        </main>
    );
};

export default Home;
