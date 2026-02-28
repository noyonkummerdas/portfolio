
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    FaGithub, FaLinkedin, FaEnvelope, FaReact, FaGitAlt,
    FaCheckCircle, FaBriefcase, FaGraduationCap, FaMapMarkerAlt,
    FaGlobe, FaThumbsUp, FaComment, FaShare, FaEllipsisH,
    FaCamera, FaUserPlus, FaFacebookMessenger, FaGlobeAmericas,
    FaTerminal, FaCode, FaStackOverflow, FaLayerGroup, FaMapMarkedAlt,
    FaRegImage, FaPlayCircle, FaSatelliteDish, FaLock, FaMicrochip,
    FaPlus
} from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import {
    SiReact, SiExpo, SiTailwindcss, SiRedux, SiJavascript,
    SiMongodb, SiPostgresql, SiBootstrap, SiNodedotjs,
    SiFirebase, SiTypescript, SiGithub,
    SiTravisci, SiPreact, SiWikipedia,
    SiAdguard, SiMapbox,
    SiOpenlayers, SiGitlab, SiMessenger
} from 'react-icons/si';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Profile Assets
import coverPhoto from '../assets/profile/coverPhoto.png';
import profilePic from '../assets/profile/profilePic.png';

// Project Assets
import projects from '../data/projects';
import Chatbot from '../components/Chatbot';

const HelloDeveloper = () => {
    const navigate = useNavigate();
    const [isChatOpen, setIsChatOpen] = useState(false);
    // Projects are now imported from ../data/projects.js


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        fade: true,
        arrows: false,
        appendDots: dots => (
            <div style={{ bottom: "20px" }}>
                <ul className="slick-dots flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-primary transition-all duration-300"></div>
        )
    };

    const skills = [
        { name: 'React', level: 95, icon: <SiReact />, color: 'primary' },
        { name: 'React Native', level: 90, icon: <FaReact />, color: 'primary' },
        { name: 'Expo', level: 85, icon: <SiExpo />, color: 'primary' },
        { name: 'JavaScript', level: 95, icon: <SiJavascript />, color: 'accent' },
        { name: 'TypeScript', level: 85, icon: <SiTypescript />, color: 'primary' },
        { name: 'Node.js', level: 80, icon: <SiNodedotjs />, color: 'accent' },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss />, color: 'primary' },
        { name: 'Redux Toolkit', level: 85, icon: <SiRedux />, color: 'primary' },
        { name: 'MongoDB', level: 80, icon: <SiMongodb />, color: 'accent' },
        { name: 'PostgreSQL', level: 75, icon: <SiPostgresql />, color: 'primary' },
        { name: 'Firebase', level: 85, icon: <SiFirebase />, color: 'accent' },
        { name: 'Bootstrap', level: 90, icon: <SiBootstrap />, color: 'primary' },
        { name: 'Git & GitHub', level: 90, icon: <FaGitAlt />, color: 'primary' }
    ];

    const hireMePoints = [
        { title: "Clean & Scalable Code", desc: "Architecture-first approach ensuring long-term maintainability and performance." },
        { title: "On-time Delivery", desc: "Precise estimation and agile sprint management to meet every deadline." },
        { title: "Real Project Experience", desc: "Direct experience solving high-stakes technical problems for production apps." },
        { title: "Clear Communication", desc: "Proactive updates and transparent collaboration with clients and stakeholders." },
        { title: "Client-Focused", desc: "Every technical decision is aligned with business goals and user ROI." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-[#f6f8fa] min-h-screen text-[#1f2328] font-inter selection:bg-blue-100 overflow-x-hidden pb-20 pt-20">
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
                .font-inter { font-family: 'Inter', sans-serif; }
                .font-mono { font-family: 'JetBrains Mono', monospace; }
                .dev-card {
                    background: #ffffff;
                    border: 1px solid #d0d7de;
                    box-shadow: 0 1px 3px rgba(31,35,40,0.06);
                    border-radius: 12px;
                }
                .terminal-input {
                    background: #f6f8fa;
                    border: 1px solid #d0d7de;
                    color: #57606a;
                    font-family: 'JetBrains Mono', monospace;
                }
                .terminal-input:focus-within {
                    border-color: #0969da;
                    box-shadow: 0 0 0 3px rgba(9,105,218,0.1);
                }
                .status-badge {
                    background: #dafbe1;
                    color: #1a7f37;
                    border: 1px solid rgba(26,127,55,0.2);
                }
                /* Slick custom */
                .slick-dots li button:before { display: none; }
                .slick-dots li.slick-active div { background-color: #0969da !important; width: 24px; }
            `}} />

            {/* Header Section (GitHub Light Style Facebook Layout) */}
            <div className="max-w-6xl mx-auto bg-white border border-[#d0d7de] rounded-b-xl overflow-hidden shadow-sm">
                {/* Cover Photo */}
                <div className="relative h-48 sm:h-64 md:h-80 w-full bg-[#f6f8fa] overflow-hidden">
                    <img
                        src={coverPhoto}
                        alt="Cover"
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
                    <div className="absolute bottom-4 right-4">
                        <button
                            onClick={() => navigate('/dev-settings')}
                            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white text-[#24292f] text-xs font-bold border border-[#d0d7de] rounded-md transition-all shadow-sm active:scale-95"
                        >
                            <FaTerminal className="text-[#0969da]" /> repository_settings
                        </button>
                    </div>
                </div>

                {/* Profile Pix & Info Overlap */}
                <div className="px-4 sm:px-10 pb-6 relative">
                    <div className="flex flex-col md:flex-row-reverse items-center md:items-end -mt-16 sm:-mt-20 md:mt-[-81px] gap-6">
                        {/* Profile Picture */}
                        <div className="relative group">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-1 bg-white shadow-xl">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-3 right-3 p-2.5 bg-[#0969da] text-white rounded-full shadow-lg border-4 border-white">
                                <FaReact className="animate-spin-slow text-sm" />
                            </div>
                        </div>

                        {/* Name & Technical Bio */}
                        <div className="flex-1 text-center md:text-right pt-4 md:pb-2">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-3 mb-2">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1f2328]">
                                    NK Noyon
                                </h1>
                                <div className="hidden md:block text-[#57606a] font-mono text-sm">/ fullstack-architect</div>
                                <span className="status-badge px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight">
                                    active_now
                                </span>
                            </div>
                            <div className="text-[#57606a] font-mono text-sm mb-4 flex flex-wrap justify-center md:justify-end gap-4">
                                <span className="hover:text-[#0969da] cursor-pointer transition-colors font-bold flex items-center gap-1">
                                    <SiGithub className="text-xs" /> 2.5k forks
                                </span>
                                <span className="text-gray-300">|</span>
                                <span className="hover:text-[#0969da] cursor-pointer transition-colors font-bold">1.2k following</span>
                                <span className="text-gray-300">|</span>
                                <span className="text-[#0969da] font-bold leading-none">@noyon_dev</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mb-4 w-full md:w-auto justify-center">
                            <button
                                onClick={() => navigate('/post-project')}
                                className="flex items-center gap-2 px-4 py-2 bg-[#0969da] hover:bg-[#0860ca] text-white font-bold rounded-md transition-all shadow-sm active:scale-95 text-sm"
                                title="Upload Project"
                            >
                                <FaPlus />
                            </button>
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="flex items-center gap-2 px-6 py-2 bg-[#f6f8fa] hover:bg-[#ebeff2] text-[#24292f] font-bold rounded-md transition-all border border-[#d0d7de] text-sm"
                            >
                                <SiMessenger className="text-[#0969da]" /> chat
                            </button>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="mt-4 border-t border-[#d0d7de] flex overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
                        {[
                            { name: 'Overview', icon: <FaCode />, path: '/hello-developer' },
                            { name: 'Repositories', icon: <SiGithub />, path: '/projects' },
                            { name: 'Terminal', icon: <FaTerminal />, path: '/dev-terminal' },
                            { name: 'Settings', icon: <SiTravisci />, path: '/dev-settings' },
                            { name: 'CV', icon: <FaThumbsUp />, path: '/cv' }
                        ].map((tab, idx) => (
                            <button
                                key={tab.name}
                                onClick={() => navigate(tab.path)}
                                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium transition-all border-b-2 ${idx === 0 ? 'border-[#fd8c73] text-[#1f2328]' : 'border-transparent text-[#57606a] hover:border-[#d0d7de] hover:text-[#1f2328]'}`}
                            >
                                <span className="text-sm opacity-70">{tab.icon}</span> {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-6xl mx-auto mt-6 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* Left Side: Intro & Stats */}
                    <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
                        <div className="dev-card p-5">
                            <h3 className="text-base font-bold text-[#1f2328] mb-4">Professional Overview</h3>
                            <div className="space-y-4">
                                <p className="text-sm text-[#1f2328] leading-relaxed font-inter">
                                    Fullstack Architect specializing in <span className="text-[#0969da] font-bold">Scalable SaaS Ecosystems</span>. I bridge the gap between complex engineering requirements and elegant user experiences.
                                </p>

                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-3">
                                            <FaBriefcase className="text-[#57606a]" />
                                            <span className="text-[#1f2328]">Active Since</span>
                                        </div>
                                        <span className="font-mono text-[#57606a]">2021_Q4</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-3">
                                            <FaCode className="text-[#57606a]" />
                                            <span className="text-[#1f2328]">Build Success</span>
                                        </div>
                                        <span className="font-bold text-[#1a7f37]">99.8%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-3">
                                            <FaTerminal className="text-[#57606a]" />
                                            <span className="text-[#1f2328]">Avg. Velocity</span>
                                        </div>
                                        <span className="text-[#0969da] font-mono whitespace-nowrap">12_commits/day</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-[#f0f2f5]">
                                    <h4 className="text-[10px] font-black text-[#57606a] uppercase tracking-widest mb-3">Live Tech Health</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1a7f37] animate-pulse"></div>
                                                <span className="text-xs text-[#1f2328]">React / Next.js</span>
                                            </div>
                                            <span className="text-[10px] text-[#1a7f37] font-bold">Stable</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1a7f37] animate-pulse"></div>
                                                <span className="text-xs text-[#1f2328]">Python / FastAPI</span>
                                            </div>
                                            <span className="text-[10px] text-[#1a7f37] font-bold">Optimized</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0969da] animate-pulse"></div>
                                                <span className="text-xs text-[#1f2328]">Cloud / S3</span>
                                            </div>
                                            <span className="text-[10px] text-[#0969da] font-bold">Escalating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Dependencies */}
                        <div className="dev-card p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-base font-bold text-[#1f2328]">Technical Dependencies</h3>
                                <button
                                    onClick={() => navigate('/dev-settings')}
                                    className="text-[10px] font-mono text-[#0969da] hover:underline"
                                >
                                    view_lock
                                </button>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {skills.map((skill, idx) => (
                                    <div key={idx} className="aspect-square bg-[#f6f8fa] border border-[#d0d7de] rounded-lg flex items-center justify-center transition-all hover:bg-white hover:shadow-md group" title={skill.name}>
                                        <div className="text-xl text-[#57606a] group-hover:text-[#0969da] transition-colors">{skill.icon}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Timeline/Projects */}
                    <div className="lg:col-span-8 space-y-4">

                        {/* Status/Commit Input */}
                        <div className="dev-card p-4">
                            <div className="flex gap-4 items-start border-b border-[#f0f2f5] pb-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d0d7de]">
                                    <img src={profilePic} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div
                                    onClick={() => navigate('/dev-terminal')}
                                    className="flex-1 bg-[#f0f2f5] hover:bg-[#e4e6eb] rounded-3xl px-4 py-2.5 text-sm text-[#57606a] cursor-pointer transition-all flex items-center gap-2 group"
                                >
                                    <span className="group-hover:text-[#1f2328]">What's on your mind, developer?</span>
                                    <span className="w-[1px] h-4 bg-[#57606a]/30 animate-pulse"></span>
                                </div>
                            </div>
                            <div className="pt-3 flex items-center justify-between">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <button onClick={() => navigate('/dev-terminal')} className="flex items-center gap-2 px-3 py-2 hover:bg-[#f2f3f5] rounded-lg transition-colors text-xs font-bold text-[#57606a]">
                                        <FaPlayCircle className="text-[#f02849] text-lg" /> <span className="hidden sm:inline">Live Rebuild</span>
                                    </button>
                                    <button onClick={() => navigate('/dev-terminal')} className="flex items-center gap-2 px-3 py-2 hover:bg-[#f2f3f5] rounded-lg transition-colors text-xs font-bold text-[#57606a]">
                                        <FaRegImage className="text-[#45bd62] text-lg" /> <span className="hidden sm:inline">Repo Assets</span>
                                    </button>
                                    <button onClick={() => navigate('/dev-terminal')} className="flex items-center gap-2 px-3 py-2 hover:bg-[#f2f3f5] rounded-lg transition-colors text-xs font-bold text-[#57606a]">
                                        <FaSatelliteDish className="text-[#eab308] text-lg" /> <span className="hidden sm:inline">Deploy Now</span>
                                    </button>
                                </div>
                                <button
                                    onClick={() => navigate('/dev-terminal')}
                                    className="px-6 py-1.5 bg-[#0969da] hover:bg-[#0860ca] text-white font-bold rounded-md text-xs transition-all shadow-sm active:scale-95"
                                >
                                    Commit
                                </button>
                            </div>
                        </div>

                        {/* Project Revisions */}
                        {projects.map((project, idx) => (
                            <div key={idx} className="dev-card overflow-hidden group/project hover:shadow-md transition-shadow">
                                {/* Post Header */}
                                <div className="p-4 flex justify-between items-start bg-[#f6f8fa]/50">
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#d0d7de]">
                                            <img src={profilePic} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[#1f2328] hover:text-[#0969da] cursor-pointer">
                                                noyon-dev / <span className="underline decoration-[#d0d7de]">{project.name.toLowerCase().replace(/\s+/g, '-')}</span>
                                            </h4>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="status-badge px-2 py-0.5 rounded-full text-[9px] font-bold">Stable Release</span>
                                                <span className="text-[10px] font-mono text-[#57606a]">#PR-{1024 + idx} • {idx === 0 ? 'just now' : 'stable build'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-900"><FaEllipsisH /></button>
                                </div>

                                {/* Project Details */}
                                <div className="px-5 py-4">
                                    <p className="text-sm text-[#1f2328] mb-4 leading-relaxed font-inter">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(Array.isArray(project.techStack) ? project.techStack : project.techStack.split(',')).map((tech, tIdx) => (
                                            <span key={tIdx} className="text-[10px] font-bold text-[#57606a] bg-[#f6f8fa] px-2 py-1 rounded border border-[#d0d7de]">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Visuals */}
                                <div className="border-y border-[#d0d7de] bg-gray-50">
                                    <Slider {...sliderSettings}>
                                        {project.images.map((img, imgIdx) => (
                                            <div key={imgIdx} className="outline-none">
                                                <img
                                                    src={img}
                                                    alt={project.name}
                                                    className="w-full aspect-video object-cover hover:brightness-105 transition-all"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>

                                {/* Feed Footer (Interactive) */}
                                <div className="p-1 px-3">
                                    <div className="flex items-center justify-between py-2 border-b border-[#f6f8fa] text-[10px] font-bold text-[#57606a] uppercase">
                                        <div className="flex gap-4">
                                            <span className="hover:text-[#0969da] cursor-pointer">★ {120 + idx * 10} Stars</span>
                                            <span className="hover:text-[#0969da] cursor-pointer">⑂ {idx + 5} Forks</span>
                                        </div>
                                        <span className="text-[#1a7f37]">Active Deployment</span>
                                    </div>
                                    <div className="flex items-center justify-between py-1">
                                        <button
                                            onClick={() => navigate('/dev-terminal')}
                                            className="flex items-center gap-2 px-4 py-2.5 text-[#57606a] hover:bg-[#f3f4f6] rounded-md transition-all flex-1 justify-center text-xs font-bold"
                                        >
                                            <SiTravisci className="text-base text-gray-400" /> Re-trigger Build
                                        </button>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-[#57606a] hover:bg-[#f3f4f6] rounded-md transition-all flex-1 justify-center text-xs font-bold">
                                            <SiPreact className="text-base text-[#0969da]" /> Inspect Source
                                        </a>
                                        <button
                                            onClick={() => navigate('/dev-terminal')}
                                            className="flex items-center gap-2 px-4 py-2.5 text-[#57606a] hover:bg-[#f3f4f6] rounded-md transition-all flex-1 justify-center text-xs font-bold"
                                        >
                                            <SiGitlab className="text-base text-orange-400" /> Sync Repo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div >
    );
};

export default HelloDeveloper;
