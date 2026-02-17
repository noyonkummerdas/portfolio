import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="pt-20 min-h-screen bg-secondary text-white">
            {/* Header Section */}
            <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
                <Link to="/projects" className="text-[10px] md:text-xs font-black text-textMain/30 hover:text-primary uppercase tracking-widest mb-8 flex items-center gap-2 transition-colors">
                    ← Back to Archive
                </Link>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 pt-4 md:pt-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black font-poppins mb-6 tracking-tighter leading-[1.1] md:leading-none">
                            {project.name}<span className="text-primary">.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-textMain/80 font-medium font-poppins leading-relaxed">
                            {project.tagline}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 lg:max-w-xs">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Body */}
            <section className="py-16 md:py-24 px-6 bg-surface/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">

                    {/* Left Column: Problem & Challenge */}
                    <div className="space-y-12 md:space-y-16">
                        <div>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 md:mb-6">The Problem</h2>
                            <p className="text-lg md:text-xl text-textMain/50 leading-relaxed font-inter">
                                {project.problem}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 md:mb-6">The Engineering Challenge</h2>
                            <p className="text-base md:text-lg text-textMain/80 leading-relaxed font-inter italic border-l-2 border-primary/30 pl-6 md:pl-8">
                                {project.challenge}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Approach & Impact */}
                    <div className="space-y-12 md:space-y-16">
                        <div>
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 md:mb-6">Technical Approach</h2>
                            <p className="text-lg md:text-xl text-textMain/50 leading-relaxed font-inter">
                                {project.approach}
                            </p>
                        </div>
                        <div className="p-8 md:p-10 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-2xl shadow-primary/20 border border-white/10 text-secondary">
                            <h2 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4 md:mb-6 opacity-60">Business Result</h2>
                            <p className="text-2xl md:text-3xl font-black font-poppins leading-tight">
                                {project.result}
                            </p>
                            <div className="mt-6 md:mt-8 flex items-center gap-4">
                                <div className="h-0.5 w-12 bg-secondary/30" />
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Global Production Metric</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Solution Features */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black font-poppins mb-12 md:mb-16 text-center">Core Implementation Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {project.features.map((feature, idx) => (
                        <div key={idx} className="p-8 md:p-10 bg-surface/40 border border-white/5 rounded-2xl hover:border-primary/30 transition-all group">
                            <div className="text-primary text-2xl md:text-3xl font-black mb-4 md:mb-6 group-hover:scale-110 transition-transform origin-left italic">0{idx + 1}</div>
                            <p className="text-lg md:text-xl font-bold font-poppins text-white leading-relaxed">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Bar */}
            <section className="py-12 bg-primary/5 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold font-poppins italic">Ready to see the source?</h3>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <button className="px-8 py-4 bg-primary text-secondary font-black rounded-xl text-[10px] md:text-xs uppercase tracking-widest hover:bg-white transition-all active:scale-95">
                            Live Prototype
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl text-[10px] md:text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                            Request Documentation
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProjectDetails;
