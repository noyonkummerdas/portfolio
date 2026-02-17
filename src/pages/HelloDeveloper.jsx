
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaGitAlt } from 'react-icons/fa';
import {
    SiReact, SiExpo, SiTailwindcss, SiRedux, SiJavascript,
    SiMongodb, SiPostgresql, SiBootstrap, SiNodedotjs,
    SiFirebase, SiTypescript
} from 'react-icons/si';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Profile Assets
import coverPhoto from '../assets/profile/coverPhoto.png';
import profilePic from '../assets/profile/profilePic.png';

// Project Assets
import adminDashboard from '../assets/projectPic/adminDashboard.PNG';
import buyerWishlist from '../assets/projectPic/buyerWishlist.PNG';
import marketPleace from '../assets/projectPic/marketPleace.PNG';

const HelloDeveloper = () => {
    // Sample Projects with multiple images
    const projects = [
        {
            name: "Eco-Commerce Platform Stocklot",
            description: "A sustainable shopping experience with high-performance product discovery and seamless checkout flow.",
            techStack: "React, Redux Toolkit, Tailwind CSS, Stripe API",
            images: [
                marketPleace,
                adminDashboard,
                buyerWishlist
            ],
            link: "https://github.com/noyonkummerdas"
        },
        {
            name: "Smart Inventory Manager",
            description: "Enterprise-grade dashboard for real-time stock tracking and predictive supply chain analytics.",
            techStack: "React Native, Node.js, MongoDB, Chart.js",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            ],
            link: "https://github.com/noyonkummerdas"
        }
    ];

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
        <div className="bg-secondary min-h-screen text-textMain font-poppins selection:bg-primary/30 overflow-x-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                .slick-dots li button:before { display: none; }
                .slick-dots li.slick-active div { background-color: #38BDF8 !important; width: 24px; }
            `}} />

            {/* Hero / Header Section */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
                {/* Cover Background */}
                <div className="absolute inset-0 z-0">
                    {/* Subtle Overlay to ensure text readability without obscuring the photo */}
                    <div className="absolute inset-0 bg-secondary/40 z-10"></div>
                    <img
                        src={coverPhoto}
                        alt="Profile Cover"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary z-20"></div>
                </div>

                <div className="relative z-30 flex flex-col items-center text-center px-4 sm:px-6">
                    {/* Profile Photo Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-primary p-1 bg-secondary mb-8 overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                    >
                        <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                            <img
                                src={profilePic}
                                alt="NK Noyon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white leading-tight">
                            Hello <span className="text-primary">Developer</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-textMain/80 font-medium mb-10 max-w-2xl mx-auto px-4">
                            I’m <span className="text-white font-bold">NK Noyon</span>, <br className="md:hidden" />
                            React & React Native Developer
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#projects" className="px-8 py-4 bg-primary text-secondary font-black rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/20 hover:bg-white min-w-[180px]">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all duration-300 min-w-[180px]">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.h2 variants={itemVariants} className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6 font-inter">About Work</motion.h2>
                    <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Crafting Digital Excellence.</motion.h3>
                    <motion.p variants={itemVariants} className="text-lg text-textMain/60 leading-relaxed font-inter">
                        I am a dedicated React and React Native Developer with a passion for building high-performance, scalable applications. My work approach is rooted in clean code, architectural integrity, and a deep understanding of the client's business goals. I specialize in turning complex requirements into intuitive user experiences that drive real results.
                    </motion.p>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section className="py-24 px-6 bg-surface/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-4 font-inter">Technical Arsenal</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Skills & Expertise<span className="text-primary">.</span></h3>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="p-8 rounded-2xl bg-secondary/50 border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`text-4xl ${skill.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:scale-110 transition-transform`}>
                                            {skill.icon}
                                        </div>
                                        <span className="font-bold text-white text-lg">{skill.name}</span>
                                    </div>
                                    <span className={`text-xs font-black ${skill.color === 'primary' ? 'text-primary' : 'text-accent'}`}>{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className={`h-full rounded-full shadow-[0_0_15px_rgba(56,189,248,0.3)] ${skill.color === 'primary' ? 'bg-primary' : 'bg-accent'
                                            }`}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Why Hire Me Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6 font-inter">The Value</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Why Hire Me<span className="text-primary">.</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hireMePoints.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <span className="text-xl font-black">0{idx + 1}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{point.title}</h4>
                                <p className="text-textMain/50 text-sm leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Work Completed Section */}
            <section id="projects" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter"
                        >
                            🏆 Work <span className="text-primary">Completed</span>
                        </motion.h2>
                        <p className="text-xl text-textMain/60 max-w-2xl mx-auto font-inter">
                            Explore a selection of high-impact products I've engineered from concept to production.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {projects.map((project, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                                {/* Project Image Slider */}
                                <div className="w-full lg:w-1/2">
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group cursor-grab active:cursor-grabbing"
                                    >
                                        <Slider {...sliderSettings}>
                                            {project.images.map((img, imgIdx) => (
                                                <div key={imgIdx} className="outline-none">
                                                    <img
                                                        src={img}
                                                        alt={`${project.name} screenshot ${imgIdx + 1}`}
                                                        className="w-full aspect-video object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="absolute inset-0 border-2 border-white/5 pointer-events-none rounded-3xl"></div>
                                    </motion.div>
                                </div>

                                {/* Project Info */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="w-full lg:w-1/2 space-y-8"
                                >
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">{project.name}</h3>
                                        <p className="text-xl text-textMain/70 leading-relaxed font-inter">{project.description}</p>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">Tech Stack</p>
                                        <p className="text-lg font-bold text-white bg-white/5 px-6 py-3 rounded-xl border border-white/10 inline-block">
                                            {project.techStack}
                                        </p>
                                    </div>

                                    <div className="pt-8">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-secondary font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
                                        >
                                            View Project <FaGithub className="text-xl" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6 border-t border-white/5 bg-surface/20">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            Let’s build <br />
                            <span className="text-primary">something great</span> together!
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12">
                            <a href="mailto:nknoyon01936@gmail.com" className="group flex items-center gap-4 text-textMain/60 hover:text-white transition-all text-xl font-bold">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                    <FaEnvelope />
                                </div>
                                Email
                            </a>
                            <a href="https://github.com/noyonkummerdas" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-textMain/60 hover:text-white transition-all text-xl font-bold">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                    <FaGithub />
                                </div>
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/noyon" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-textMain/60 hover:text-white transition-all text-xl font-bold">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                    <FaLinkedin />
                                </div>
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HelloDeveloper;
