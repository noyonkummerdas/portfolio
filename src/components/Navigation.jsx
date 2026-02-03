import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0F0F0F]/60 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link to="/" className="text-xl font-black font-poppins tracking-tighter">
                    PORTFOLIO<span className="text-indigo-500">.</span>2026
                </Link>
                <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <Link to="/" className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-white border-b-2 border-indigo-500 pb-1' : ''}`}>Home</Link>
                    <Link to="/projects" className={`hover:text-white transition-colors ${location.pathname === '/projects' ? 'text-white border-b-2 border-indigo-500 pb-1' : ''}`}>Projects</Link>
                    <Link to="/reviews" className={`hover:text-white transition-colors ${location.pathname === '/reviews' ? 'text-white border-b-2 border-indigo-500 pb-1' : ''}`}>Reviews</Link>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
                <Link
                    to="/projects"
                    className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-indigo-600 hover:text-white transition-all transform active:scale-95"
                >
                    Hire Me
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
