
import React, { useState } from 'react';

const HireMe = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', company: '',
        projectType: 'Web Application',
        budget: '$5k - $10k',
        timeline: '1 - 3 Months',
        details: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newInquiry = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString(),
            ...formData
        };

        const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        localStorage.setItem('inquiries', JSON.stringify([newInquiry, ...existingInquiries]));

        console.log('Form Submitted & Saved:', newInquiry);
        alert("Thanks! Your inquiry has been saved. Check the dashboard.");

        setFormData({
            name: '', email: '', company: '',
            projectType: 'Web Application',
            budget: '$5k - $10k',
            timeline: '1 - 3 Months',
            details: ''
        });
    };

    const services = [
        { title: "Frontend Architecture", description: "Scalable React & React Native applications built for performance and maintainability.", icon: "⚡" },
        { title: "Full Stack Systems", description: "Robust backends with Python/FastAPI, ensuring secure data synchronization.", icon: "🏗️" },
        { title: "Performance Review", description: "Auditing and optimizing existing codebases for speed and SEO.", icon: "🚀" }
    ];

    return (
        <div className="pt-32 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="px-6 max-w-4xl mx-auto text-center mb-20">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in">
                    Open for Business
                </div>
                <h1 className="text-5xl md:text-7xl font-black font-poppins mb-8 tracking-tighter text-white">
                    Let's Build the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">Extraordinary</span>
                </h1>
                <p className="text-xl text-gray-400 font-inter mb-10 leading-relaxed max-w-2xl mx-auto">
                    I partner with forward-thinking companies to build high-performance web and mobile applications.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                {/* Left Column: Context & Services */}
                <div>
                    <h2 className="text-3xl font-black font-poppins mb-8">How I Add Value</h2>
                    <div className="space-y-6 mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 bg-secondary/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all duration-500">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2 font-poppins">{service.title}</h3>
                                <p className="text-sm text-gray-400 font-inter leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Intake Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem]">
                    <h2 className="text-2xl font-black font-poppins mb-6">Tell me about your project</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Client Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" required />
                            </div>
                        </div>

                        {/* Project Scope */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Project Type</label>
                                <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer">
                                    <option>Web Application</option>
                                    <option>Mobile App (React Native)</option>
                                    <option>Marketing Website</option>
                                    <option>Consulting / Audit</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Target Timeline</label>
                                <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer">
                                    <option>&lt; 1 Month</option>
                                    <option>1 - 3 Months</option>
                                    <option>3 - 6 Months</option>
                                    <option>6+ Months</option>
                                </select>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Estimated Budget</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {['<$5k', '$5k-$10k', '$10k-$20k', '$20k+'].map(b => (
                                    <button
                                        key={b}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, budget: b })}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${formData.budget === b ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                                    >
                                        {b}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Project Goals & Requirements</label>
                            <textarea
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                rows="5"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                placeholder="Describe the problem you're solving, key features needed, and any technical constraints..."
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-600/30 uppercase tracking-widest text-xs">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HireMe;
