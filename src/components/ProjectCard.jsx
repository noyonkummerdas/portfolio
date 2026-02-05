
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 2026-Standard Portfolio Project Card
 * Designed for visual impact, high scannability, and premium feel.
 */
const ProjectCard = ({ project }) => { // 2026-Standard
    return (
        <div className="group relative bg-secondary/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(99,102,241,0.15)]">
            {/* Visual Accent Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="p-10 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold font-poppins text-white group-hover:text-indigo-400 transition-colors duration-500">
                        {project.name}
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                </div>

                {/* Tagline */}
                <p className="text-xl text-gray-200 font-medium mb-8 leading-relaxed font-poppins">
                    {project.tagline}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-10">
                    <div>
                        <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-2 font-inter">Challenge</h4>
                        <p className="text-sm text-gray-400 leading-relaxed font-inter line-clamp-2">{project.problem}</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-2 font-inter">Impact Strategy</h4>
                        <ul className="space-y-2">
                            {project.features.slice(0, 2).map((feature, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-3 font-inter">
                                    <span className="text-indigo-500 mt-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </span>
                                    <span className="truncate">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[10px] font-bold py-1.5 px-3 bg-white/5 text-gray-400 rounded-full border border-white/10 uppercase tracking-widest font-inter"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Call to Action */}
                <Link
                    to={`/projects/${project.id}`}
                    className="relative block w-full py-4 text-center overflow-hidden group/btn bg-white text-black font-black rounded-2xl transition-all duration-300 hover:bg-indigo-600 hover:text-white transform active:scale-95 shadow-2xl font-poppins text-xs uppercase tracking-widest"
                >
                    <span className="relative z-10">{project.ctaText || "View Case Study"}</span>
                    <div className="absolute inset-0 bg-indigo-600 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300 rounded-2xl" />
                </Link>
            </div>
            <Footer />
        </div>

    );
};

export default ProjectCard;
