import React from 'react';
import Card from '../components/Card';
import projects from '../data/projects';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative pt-24 pb-32 px-6 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in">
                        Top Rated Seller • Available for New Projects
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-poppins mb-8 tracking-tighter leading-[0.9] text-white">
                        Crafting <br />
                        <span className="text-primary drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">Premium Digital</span><br />
                        Experiences
                    </h1>
                    <p className="text-xl md:text-2xl text-textMain/60 max-w-3xl mx-auto leading-relaxed font-inter mb-12">
                        Senior React & React Native Architect specializing in scalable B2B ecosystems and high-performance mobile applications.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link to="/projects" className="px-10 py-5 bg-primary text-secondary font-black rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-primary/30 hover:bg-white">
                            Explore Portfolio
                        </Link>
                        <Link to="/cv" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300">
                            CV

                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Hire Me Section */}
            <section className="py-24 px-6 bg-surface/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black font-poppins text-white mb-4 tracking-tighter">
                            Why Hire Me<span className="text-primary">.</span>
                        </h2>
                        <p className="text-textMain/50 max-w-2xl mx-auto">
                            Strategically driving value through technical excellence and client-focused solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Scalable Architecture", desc: "Building systems that grow with your business using modular, clean-code principles." },
                            { title: "Performance First", desc: "Optimized delivery for lightning-fast load times and smooth 60fps mobile interactions." },
                            { title: "Business ROI", desc: "Focused on delivering features that directly impact your bottom line and user retention." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-surface/50 hover:border-primary/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-textMain/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-20">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black font-poppins text-white mb-4 tracking-tighter">
                            Featured Impact<span className="text-primary">.</span>
                        </h2>
                        <p className="text-textMain/50 max-w-md font-inter">
                            High-stakes projects delivering real business value through React & React Native excellence.
                        </p>
                    </div>
                    <Link to="/projects" className="text-sm font-bold text-primary hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 group">
                        View All Work <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project, index) => (
                        <Card key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 px-6 bg-surface/20 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black font-poppins text-white mb-8 tracking-tighter">
                                Core Skills &<br />
                                <span className="text-primary">Ecosystem Expertise.</span>
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {["React", "React Native", "TypeScript", "Node.js", "Tailwind CSS", "Redux", "Firebase", "AWS"].map((skill, idx) => (
                                    <span key={idx} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-textMain/80 font-bold text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-8 rounded-2xl bg-surface/50 border border-white/5 text-center">
                                <span className="text-4xl font-black text-primary">5+</span>
                                <p className="text-xs text-textMain/40 uppercase tracking-widest mt-2">Years Exp.</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-surface/50 border border-white/5 text-center">
                                <span className="text-4xl font-black text-accent">50+</span>
                                <p className="text-xs text-textMain/40 uppercase tracking-widest mt-2">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
