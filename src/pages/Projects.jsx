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
        <div className="pt-32 min-h-screen">
            <section className="px-6 max-w-7xl mx-auto mb-20 text-center md:text-left">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-poppins mb-6 md:mb-8 tracking-tighter text-slate-900 dark:text-white">
                    The Archive<span className="text-primary">.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-textMain/50 max-w-2xl font-inter mb-10 md:mb-12 mx-auto md:mx-0">
                    An exhaustive list of strategic engineering projects, sorted by impact and technology.
                </p>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 mb-12 md:mb-16">
                    {techs.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full border text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 ${filter === tech
                                ? 'bg-primary border-primary text-secondary shadow-lg shadow-primary/20'
                                : 'bg-slate-200 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-600 dark:text-textMain/40 hover:border-primary/50'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <Card key={index} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
