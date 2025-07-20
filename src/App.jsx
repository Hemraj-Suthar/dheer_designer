import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import ProjectDetail from './components/ProjectDetail';
import AppLayout from './pages/AppLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AppLayout/>} >
                    <Route index element={<Home />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='project/:id' element={<ProjectDetail />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
