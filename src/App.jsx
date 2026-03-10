import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Cursor />
            <Navbar />
            <Hero />
            <Marquee />
            <About />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
