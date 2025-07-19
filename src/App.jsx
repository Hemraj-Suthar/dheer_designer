import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import WhatsappLink from './components/WhatsappLink';
// import projects from './src/Projects.jsx';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="*" element={<Home />} /> */}
                {/* <Route path="/" element={<ProjectList />} /> */}
            </Routes>
            <WhatsappLink/>
            <Footer/>
        </Router>
    );
}

export default App;
