import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                {/* Action Buttons - Hidden when printing */}
                <div className="p-6 border-b border-white/10 print:hidden flex gap-4">
                    <button
                        onClick={handlePrint}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                    >
                        <FaDownload /> Download PDF
                    </button>
                    <Link
                        to="/admin/cv"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2 border border-white/10"
                    >
                        <FaEdit /> Manage CV
                    </Link>
                </div>

                {/* CV Content */}
                <div className="p-8 md:p-12 print:p-12 print:bg-white print:text-black">
                    {/* Header */}
                    <header className="mb-12 pb-8 border-b border-white/10 print:border-gray-300">
                        <h1 className="text-5xl font-black mb-2 print:text-black">NK Noyon</h1>
                        <h2 className="text-2xl text-indigo-400 font-semibold mb-6 print:text-gray-700">
                            React & React Native Developer
                        </h2>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                            <a href="mailto:nknoyon01936@gmail.com" className="flex items-center gap-2 hover:text-white print:text-gray-600">
                                <FaEnvelope /> nknoyon01936@gmail.com
                            </a>
                            <a href="https://github.com/noyonkummerdas" className="flex items-center gap-2 hover:text-white print:text-gray-600">
                                <FaGithub /> github.com/noyonkummerdas
                            </a>
                            <a href="https://linkedin.com/in/noyon" className="flex items-center gap-2 hover:text-white print:text-gray-600">
                                <FaLinkedin /> linkedin.com/in/noyon
                            </a>
                        </div>
                    </header>

                    {/* Professional Summary */}
                    <section className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Professional Summary</h3>
                        <p className="text-gray-300 leading-relaxed print:text-gray-700">
                            Experienced React and React Native Developer with a proven track record of building scalable,
                            user-friendly web and mobile applications. Specialized in creating high-performance solutions
                            that drive business value through clean architecture, efficient code, and exceptional user experiences.
                            Passionate about leveraging modern technologies to solve real-world problems and deliver measurable results.
                        </p>
                    </section>

                    {/* Technical Skills */}
                    <section className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold mb-2 text-white print:text-gray-900">Frontend Development</h4>
                                <p className="text-gray-300 print:text-gray-700">React, React Native, Expo, JavaScript (ES6+), HTML5, CSS3</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-white print:text-gray-900">State Management</h4>
                                <p className="text-gray-300 print:text-gray-700">Redux, Context API, RTK Query</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-white print:text-gray-900">Styling & UI</h4>
                                <p className="text-gray-300 print:text-gray-700">Tailwind CSS, Styled Components, Responsive Design</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-white print:text-gray-900">Backend & APIs</h4>
                                <p className="text-gray-300 print:text-gray-700">REST APIs, Firebase, Node.js basics</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-white print:text-gray-900">Tools & Workflow</h4>
                                <p className="text-gray-300 print:text-gray-700">Git, GitHub, VS Code, npm, Webpack</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-white print:text-gray-900">Other</h4>
                                <p className="text-gray-300 print:text-gray-700">Performance Optimization, Debugging, Testing</p>
                            </div>
                        </div>
                    </section>

                    {/* Professional Experience */}
                    <section className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Professional Experience</h3>

                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="text-xl font-bold text-white print:text-gray-900">React & React Native Developer</h4>
                                    <p className="text-indigo-300 print:text-gray-600">Freelance / Contract</p>
                                </div>
                                <span className="text-gray-400 text-sm print:text-gray-600">2022 - Present</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 print:text-gray-700">
                                <li>Developed and deployed 10+ responsive web and mobile applications for diverse clients</li>
                                <li>Improved app performance by 40% through code optimization and efficient state management</li>
                                <li>Integrated REST APIs and Firebase for real-time data synchronization</li>
                                <li>Collaborated with designers and stakeholders to deliver pixel-perfect UIs</li>
                                <li>Implemented Redux for complex state management in large-scale applications</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="text-xl font-bold text-white print:text-gray-900">Frontend Developer</h4>
                                    <p className="text-indigo-300 print:text-gray-600">Tech Startup</p>
                                </div>
                                <span className="text-gray-400 text-sm print:text-gray-600">2020 - 2022</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 print:text-gray-700">
                                <li>Built responsive web applications using React and modern CSS frameworks</li>
                                <li>Worked in an Agile team environment with weekly sprints and code reviews</li>
                                <li>Reduced page load times by 30% through lazy loading and code splitting</li>
                                <li>Maintained and updated legacy codebases while implementing new features</li>
                            </ul>
                        </div>
                    </section>

                    {/* Key Projects */}
                    <section className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Key Projects</h3>

                        <div className="mb-6">
                            <h4 className="text-xl font-bold text-white mb-2 print:text-gray-900">Ecommerce Mobile App</h4>
                            <p className="text-gray-400 text-sm mb-2 print:text-gray-600">React Native, Redux, Firebase</p>
                            <p className="text-gray-300 print:text-gray-700">
                                Developed a full-featured shopping app with product catalog, cart management, and checkout flow.
                                Implemented Redux for state management and Firebase for backend services.
                                <strong className="text-white print:text-gray-900"> Result: Improved user transaction speed by 35% and increased conversion rates.</strong>
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xl font-bold text-white mb-2 print:text-gray-900">Admin Dashboard</h4>
                            <p className="text-gray-400 text-sm mb-2 print:text-gray-600">React, Tailwind CSS, REST APIs</p>
                            <p className="text-gray-300 print:text-gray-700">
                                Created a comprehensive admin panel for managing projects, users, and analytics.
                                Integrated multiple REST APIs for data fetching and real-time updates.
                                <strong className="text-white print:text-gray-900"> Result: Saved clients 10+ hours of manual work per week.</strong>
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xl font-bold text-white mb-2 print:text-gray-900">Portfolio Website</h4>
                            <p className="text-gray-400 text-sm mb-2 print:text-gray-600">React, React Router, Tailwind CSS</p>
                            <p className="text-gray-300 print:text-gray-700">
                                Designed and developed a modern portfolio website with smooth animations and responsive design.
                                Implemented routing, dynamic content loading, and contact form integration.
                                <strong className="text-white print:text-gray-900"> Result: Increased client inquiries by 50%.</strong>
                            </p>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Education</h3>
                        <div className="mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="text-xl font-bold text-white print:text-gray-900">Bachelor of Science in Computer Science</h4>
                                    <p className="text-indigo-300 print:text-gray-600">University Name</p>
                                </div>
                                <span className="text-gray-400 text-sm print:text-gray-600">2016 - 2020</span>
                            </div>
                            <p className="text-gray-300 print:text-gray-700">
                                Focused on software engineering, data structures, algorithms, and web development.
                            </p>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Certifications & Training</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 print:text-gray-700">
                            <li>React - The Complete Guide (Udemy)</li>
                            <li>React Native - Advanced Concepts (Udemy)</li>
                            <li>JavaScript Algorithms and Data Structures (freeCodeCamp)</li>
                            <li>Responsive Web Design Certification (freeCodeCamp)</li>
                        </ul>
                    </section>

                    {/* Languages */}
                    <section>
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Languages</h3>
                        <div className="flex gap-8">
                            <div>
                                <p className="font-bold text-white print:text-gray-900">English</p>
                                <p className="text-gray-300 print:text-gray-700">Professional Working Proficiency</p>
                            </div>
                            <div>
                                <p className="font-bold text-white print:text-gray-900">Bengali</p>
                                <p className="text-gray-300 print:text-gray-700">Native</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CV;
