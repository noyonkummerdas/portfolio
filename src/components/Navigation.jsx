import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-secondary/60 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link to="/" className="text-xl font-black font-poppins tracking-tighter text-white">
                    PORTFOLIO<span className="text-primary">.</span>2026
                </Link>
                <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-textMain/60">
                    <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Home</Link>
                    <Link to="/projects" className={`hover:text-primary transition-colors ${location.pathname === '/projects' ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Projects</Link>
                    <Link to="/reviews" className={`hover:text-primary transition-colors ${location.pathname === '/reviews' ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Reviews</Link>
                    <Link to="/admin" className={`hover:text-primary transition-colors ${location.pathname.startsWith('/admin') ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Dashboard</Link>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </div>
                <Link
                    to="/hire-me"
                    className="px-6 py-2 bg-primary text-secondary text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                >
                    Hire Me
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
