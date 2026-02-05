import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HelloDeveloper = () => {
    const [greeting, setGreeting] = useState('');
    const fullGreeting = "Hello! Welcome to my developer portfolio.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setGreeting(fullGreeting.slice(0, index + 1));
            index++;
            if (index > fullGreeting.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const parseBold = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className="text-white">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const clientServices = [
        "Build responsive web and mobile apps that **increase engagement and retention**",
        "Optimize app performance to **reduce load times and improve UX**",
        "Integrate APIs for **real-time data and smooth workflows**",
        "Create dashboards to **simplify management and decision-making**",
        "Ensure clean, maintainable code for **long-term scalability**"
    ];

    const skills = [
        "React", "React Native", "Expo",
        "Redux", "Context API",
        "Tailwind CSS", "CSS3", "HTML5", "JavaScript",
        "REST APIs & Firebase Integration",
        "Git", "GitHub", "Version Control"
    ];

    const projects = [
        {
            name: "Ecommerce Mobile App",
            description: "A shopping app that handles large product catalogs and smooth checkout, built with React Native & Redux.",
            result: "Result: faster user transactions and improved conversion rates.",
            tech: ["React Native", "Redux"],
            link: "#"
        },
        {
            name: "Portfolio Website",
            description: "Professional showcase website built with React & Tailwind CSS.",
            result: "Helps clients explore my work quickly.",
            tech: ["React", "Tailwind CSS"],
            link: "#"
        },
        {
            name: "Admin Dashboard",
            description: "Dashboard to manage projects and users efficiently.",
            result: "Result: saved clients hours of manual work every week.",
            tech: ["React", "Node.js"],
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto">
            {/* Greeting Animation */}
            <div className="text-center mb-8 h-8">
                <p className="text-indigo-400 font-mono text-sm md:text-base animate-pulse">
                    {greeting}
                    <span className="animate-blink">|</span>
                </p>
            </div>

            {/* Profile Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center mb-16"
            >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 mb-6 shadow-2xl shadow-indigo-500/20">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                        <span className="text-4xl">👨‍💻</span>
                        {/* Replace with <img src="/path/to/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                    NK Noyon
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-4">
                    React & React Native Developer
                </h2>
                <p className="max-w-3xl text-gray-300 leading-relaxed text-lg">
                    I help businesses and clients <strong className="text-white">build fast, scalable, and user-friendly web and mobile applications</strong> that solve real problems. My goal is to <strong className="text-white">turn your ideas into high-performing apps</strong> that delight users and drive results.
                </p>
            </motion.div>

            {/* What I Do for Clients */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-16"
            >
                <h3 className="text-2xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">What I Do for Clients</h3>
                <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-colors">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {clientServices.map((service, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <FaCheckCircle className="text-indigo-500 mt-1.5 flex-shrink-0" />
                                <span className="text-gray-300 leading-relaxed">{parseBold(service)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Skills */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-16"
            >
                <h3 className="text-2xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <span key={index} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-default text-sm md:text-base">
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Projects */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-16"
            >
                <h3 className="text-2xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">Selected Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group flex flex-col justify-between h-full">
                            <div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.name}</h4>
                                <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
                                <p className="text-indigo-300 text-sm font-medium mb-4 bg-indigo-500/10 p-2 rounded inline-block">{parseBold(project.result)}</p>
                            </div>
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="text-sm font-bold uppercase tracking-wider text-white border-b border-indigo-500 pb-0.5 hover:text-indigo-400 transition-colors">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Why Work With Me */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-16 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-white/10"
            >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Why Work With Me</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                    I focus on <strong className="text-white">solving your real problems</strong>. Whether you need a robust mobile app, a responsive website, or a smart admin panel, I deliver solutions that are <strong className="text-white">scalable, maintainable, and user-focused</strong>.
                </p>
            </motion.div>

            {/* Contact & Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold mb-8">Let’s Connect</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                    <a href="https://github.com/noyonkummerdas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group px-4 py-3 md:px-6 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                        <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-sm md:text-base">github.com/noyonkummerdas</span>
                    </a>
                    <a href="https://linkedin.com/in/noyon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all group px-4 py-3 md:px-6 rounded-full hover:bg-blue-500/5 border border-transparent hover:border-blue-500/20">
                        <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-sm md:text-base">linkedin.com/in/noyon</span>
                    </a>
                    <a href="mailto:nknoyon01936@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-all group px-4 py-3 md:px-6 rounded-full hover:bg-red-500/5 border border-transparent hover:border-red-500/20">
                        <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-sm md:text-base">nknoyon01936@gmail.com</span>
                    </a>
                </div>
            </motion.div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HelloDeveloper;
