import React, { useState } from 'react';
import Card from '../components/Card';
import projects from '../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const techs = ['All', ...new Set(projects.flatMap(p => p.techStack))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.techStack.includes(filter));

    return (
        <div className="pt-32 min-h-screen bg-[#0F0F0F] text-white">
            <section className="px-6 max-w-7xl mx-auto mb-20">
                <h1 className="text-5xl md:text-8xl font-black font-poppins mb-8 tracking-tighter">
                    The Archive<span className="text-indigo-500">.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl font-inter mb-12">
                    An exhaustive list of strategic engineering projects, sorted by impact and technology.
                </p>

                {/* Filter Bar */}
                <div className="flex flex-wrap gap-3 mb-16">
                    {techs.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-6 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all ${filter === tech
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Card key={index} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
