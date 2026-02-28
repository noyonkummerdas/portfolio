
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 2026-Standard Portfolio Project Card
 * Designed for visual impact, high scannability, and premium feel.
 */
const Card = ({ project }) => {
    return (
        <div className="group relative bg-white dark:bg-surface/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(56,189,248,0.15)] shadow-sm dark:shadow-none">
            {/* Visual Accent Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-6 sm:p-8 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {project.name}
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-slate-800 dark:text-textMain/90 font-medium mb-6 leading-relaxed">
                    {project?.tagline || project?.description}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                    <div>
                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2">Challenge</h4>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-textMain/60 leading-relaxed line-clamp-2">{project?.problem || "Optimizing performance and scalability."}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2">Impact Strategy</h4>
                        <ul className="space-y-2">
                            {(project?.features || []).slice(0, 2).map((feature, idx) => (
                                <li key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-textMain/80 flex items-start gap-3">
                                    <span className="text-accent mt-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </span>
                                    <span className="truncate">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {(project?.techStack || []).map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-bold py-1 px-3 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-textMain/50 rounded-full border border-slate-200 dark:border-white/10 uppercase tracking-widest"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Call to Action */}
                <Link
                    to={`/projects/${project.id}`}
                    className="relative block w-full py-4 text-center overflow-hidden group/btn bg-primary text-secondary font-black rounded-xl transition-all duration-300 hover:bg-white transform active:scale-95 shadow-lg shadow-primary/10 text-xs uppercase tracking-widest"
                >
                    <span className="relative z-10">{project.ctaText || "View Case Study"}</span>
                    <div className="absolute inset-0 bg-white translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    );
};

export default Card;
