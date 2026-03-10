import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md py-4' : 'bg-transparent py-6'} px-6 md:px-12`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-yellow font-bebas text-3xl font-bold cursor-pointer hover:scale-105 transition-transform"
                >
                    SK
                </div>

                <div className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-text">
                    <button onClick={() => scrollTo('about')} className="hover:text-yellow transition-colors relative group">
                        [About]
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow transition-all group-hover:w-full"></span>
                    </button>
                    <button onClick={() => scrollTo('projects')} className="hover:text-yellow transition-colors relative group">
                        [Projects]
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow transition-all group-hover:w-full"></span>
                    </button>
                    <button onClick={() => scrollTo('stack')} className="hover:text-yellow transition-colors relative group">
                        [Tech Stack]
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow transition-all group-hover:w-full"></span>
                    </button>
                    <button onClick={() => scrollTo('contact')} className="hover:text-yellow transition-colors relative group">
                        [Contact]
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow transition-all group-hover:w-full"></span>
                    </button>
                </div>

                <div className="md:hidden text-yellow font-bebas text-xl">
                    MENU
                </div>
            </div>
        </nav>
    );
}
