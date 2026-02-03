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
        <div className="pt-20 min-h-screen bg-[#0F0F0F] text-white">
            {/* Header Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <Link to="/projects" className="text-xs font-black text-gray-500 hover:text-indigo-400 uppercase tracking-widest mb-8 flex items-center gap-2 transition-colors">
                    ← Back to Archive
                </Link>
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 pt-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-black font-poppins mb-6 tracking-tighter leading-none">
                            {project.name}<span className="text-indigo-500">.</span>
                        </h1>
                        <p className="text-2xl text-gray-300 font-medium font-poppins leading-relaxed">
                            {project.tagline}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 md:max-w-xs">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Body */}
            <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">

                    {/* Left Column: Problem & Challenge */}
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.3em] mb-6">The Problem</h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-inter">
                                {project.problem}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.3em] mb-6">The Engineering Challenge</h2>
                            <p className="text-lg text-gray-300 leading-relaxed font-inter italic border-l-2 border-indigo-500/30 pl-8">
                                {project.challenge}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Approach & Impact */}
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.3em] mb-6">Technical Approach</h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-inter">
                                {project.approach}
                            </p>
                        </div>
                        <div className="p-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl shadow-2xl shadow-indigo-600/20 border border-white/10">
                            <h2 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 opacity-80">Business Result</h2>
                            <p className="text-3xl font-black font-poppins text-white leading-tight">
                                {project.result}
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="h-0.5 w-12 bg-white/30" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Production Metric</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Solution Features */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-black font-poppins mb-16 text-center">Core Implementation Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.features.map((feature, idx) => (
                        <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/30 transition-all group">
                            <div className="text-indigo-500 text-3xl font-black mb-6 group-hover:scale-110 transition-transform origin-left italic">0{idx + 1}</div>
                            <p className="text-xl font-bold font-poppins text-white leading-relaxed">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Bar */}
            <section className="py-12 bg-indigo-600/10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <h3 className="text-2xl font-bold font-poppins italic">Ready to see the source?</h3>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-white text-black font-black rounded-xl text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
                            Live Prototype
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                            Request Documentation
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProjectDetails;
