import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
// import projects from './src/Projects.jsx';

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<ProjectList />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
