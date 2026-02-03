import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero_bg.png"
                        alt="Abstract Background"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/40 to-[#0F0F0F]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in">
                        Available for New Projects
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-poppins mb-8 tracking-tighter leading-[0.9] text-white">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">Digital Value</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-inter mb-12">
                        Professional React & React Native Developer focused on high-performance ecosystems and scalable B2B architectures.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link to="/projects" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-indigo-600/30">
                            Explore Portfolio
                        </Link>
                        <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300">
                            Download CV
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-20">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black font-poppins text-white mb-4 tracking-tighter">
                            Featured Impact<span className="text-indigo-500">.</span>
                        </h2>
                        <p className="text-gray-500 max-w-md font-inter">
                            A selection of high-stakes projects delivering real business value through modular architecture.
                        </p>
                    </div>
                    <Link to="/projects" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest flex items-center gap-2 group">
                        View All Projects <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* Expertise & Other Sections would go here as well, kept brief for Home */}
        </div>
    );
};

export default Home;
