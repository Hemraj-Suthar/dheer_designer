import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import ProjectList from "../components/ProjectList";

const Home = () => {
    return (
        <main className="max-w-4xl mx-auto px-4 text-white">
            <HeroBanner/>
            <ProjectList/>
        </main>
    );
};

export default Home;
