import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
// import projects from './src/Projects.jsx';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ProjectList />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ProjectList />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
