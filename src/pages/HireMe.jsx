
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitHireMe, resetSubmitStatus } from '../features/hireMeSlice';
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


const HireMe = () => {
    const dispatch = useDispatch();
    const { submitSuccess, submitError } = useSelector((state) => state.hireMe);

    const [formData, setFormData] = useState({
        name: '', email: '', company: '',
        projectType: 'Web Application',
        budget: '$5k-$10k',
        timeline: '1 - 3 Months',
        details: ''
    });

    useEffect(() => {
        if (submitSuccess) {
            alert("Thanks! Your inquiry has been sent successfully.");
            setFormData({
                name: '', email: '', company: '',
                projectType: 'Web Application',
                budget: '$5k-$10k',
                timeline: '1 - 3 Months',
                details: ''
            });
            dispatch(resetSubmitStatus());
        }
        if (submitError) {
            alert(`Error: ${submitError}`);
            dispatch(resetSubmitStatus());
        }
    }, [submitSuccess, submitError, dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            message: formData.details
        };
        dispatch(submitHireMe(submissionData));
    };

    const services = [
        { title: "Frontend Architecture", description: "Scalable React & React Native applications built for performance and maintainability.", icon: "⚡" },
        { title: "Full Stack Systems", description: "Robust backends with Python/FastAPI, ensuring secure data synchronization.", icon: "🏗️" },
        { title: "Performance Review", description: "Auditing and optimizing existing codebases for speed and SEO.", icon: "🚀" }
    ];

    return (
        <div className="pt-32 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="px-6 max-w-4xl mx-auto text-center mb-16 md:mb-20">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in">
                    Open for Business
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-poppins mb-6 md:mb-8 tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                    Let's Build the <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">Extraordinary</span>
                </h1>
                <p className="text-base sm:text-xl text-slate-600 dark:text-gray-400 font-inter mb-10 leading-relaxed max-w-2xl mx-auto">
                    I partner with forward-thinking companies to build high-performance web and mobile applications.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24">
                {/* Left Column: Context & Services */}
                <div className="order-2 lg:order-1">
                    <h2 className="text-2xl md:text-3xl font-black font-poppins mb-8 text-slate-900 dark:text-white text-center lg:text-left">How I Add Value</h2>
                    <div className="space-y-6 mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 bg-white dark:bg-secondary/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all duration-500 shadow-sm dark:shadow-none">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-poppins">{service.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-gray-400 font-inter leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Intake Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] order-1 lg:order-2 self-start">
                    <h2 className="text-xl md:text-2xl font-black font-poppins mb-6 text-white text-center lg:text-left">Tell me about your project</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Client Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[14px] uppercase tracking-widest font-bold text-gray-400">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/30 border border-gray-200 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 placeholder-gray-300 transition-colors text-sm" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/30 border border-gray-200 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 placeholder-gray-300 transition-colors text-sm" placeholder="john@example.com" required />
                            </div>
                        </div>

                        {/* Project Scope */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="space-y-2">
                                <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
                                    Project Type
                                </label>

                                <div className="relative">
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="w-full bg-white/30 border border-gray-200 rounded-xl px-4 py-3 
                 text-white focus:outline-none transition-colors 
                 appearance-none cursor-pointer text-sm pr-10"
                                    >
                                        <option className="bg-slate-800 text-gray-300">Web Application</option>
                                        <option className="bg-slate-800 text-gray-300">Mobile App (React Native)</option>
                                        <option className="bg-slate-800 text-gray-300">Marketing Website</option>
                                        <option className="bg-slate-800 text-gray-300">Consulting / Audit</option>
                                    </select>

                                    {/* Down Arrow */}
                                    <ChevronDownIcon
                                        className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Target Timeline</label>
                                <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-white/30 border border-gray-200 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 placeholder-gray-300 transition-colors appearance-none cursor-pointer text-sm">
                                    <option>&lt; 1 Month</option>
                                    <option>1 - 3 Months</option>
                                    <option>3 - 6 Months</option>
                                    <option>6+ Months</option>
                                    <option>1 year</option>
                                    <option>Valuable Project</option>
                                </select>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Estimated Budget</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {['<$5k', '$5k-$10k', '$10k-$20k', '$20k+'].map(b => (
                                    <button
                                        key={b}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, budget: b })}
                                        className={`px-2 py-2.5 rounded-lg text-[10px] font-bold border transition-all ${formData.budget === b ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
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
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none text-sm placeholder:text-gray-600"
                                placeholder="Describe the problem you're solving..."
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-600/30 uppercase tracking-widest text-xs active:scale-[0.98]">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HireMe;
