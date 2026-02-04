import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CV = () => {
    const [cvData, setCvData] = useState(null);

    useEffect(() => {
        // Load the latest CV from localStorage
        const cvs = JSON.parse(localStorage.getItem('cvData') || '[]');
        if (cvs.length > 0) {
            // Get the latest CV
            setCvData(cvs[cvs.length - 1]);
        }
    }, []);

    const handlePrint = () => {
        window.print();
    };

    // Default/Placeholder CV data
    const defaultData = {
        personalInfo: {
            name: 'NK Noyon',
            title: 'React & React Native Developer',
            email: 'nknoyon01936@gmail.com',
            github: 'github.com/noyonkummerdas',
            linkedin: 'linkedin.com/in/noyon'
        },
        summary: 'Experienced React and React Native Developer with a proven track record of building scalable, user-friendly web and mobile applications. Specialized in creating high-performance solutions that drive business value through clean architecture, efficient code, and exceptional user experiences. Passionate about leveraging modern technologies to solve real-world problems and deliver measurable results.',
        skills: {
            frontend: 'React, React Native, Expo, JavaScript (ES6+), HTML5, CSS3',
            stateManagement: 'Redux, Context API, RTK Query',
            styling: 'Tailwind CSS, Styled Components, Responsive Design',
            backend: 'REST APIs, Firebase, Node.js basics',
            tools: 'Git, GitHub, VS Code, npm, Webpack',
            other: 'Performance Optimization, Debugging, Testing'
        },
        experience: [
            {
                title: 'React & React Native Developer',
                company: 'Freelance / Contract',
                duration: '2022 - Present',
                responsibilities: 'Developed and deployed 10+ responsive web and mobile applications for diverse clients\nImproved app performance by 40% through code optimization and efficient state management\nIntegrated REST APIs and Firebase for real-time data synchronization\nCollaborated with designers and stakeholders to deliver pixel-perfect UIs\nImplemented Redux for complex state management in large-scale applications'
            },
            {
                title: 'Frontend Developer',
                company: 'Tech Startup',
                duration: '2020 - 2022',
                responsibilities: 'Built responsive web applications using React and modern CSS frameworks\nWorked in an Agile team environment with weekly sprints and code reviews\nReduced page load times by 30% through lazy loading and code splitting\nMaintained and updated legacy codebases while implementing new features'
            }
        ],
        projects: [
            {
                name: 'Ecommerce Mobile App',
                tech: 'React Native, Redux, Firebase',
                description: 'Developed a full-featured shopping app with product catalog, cart management, and checkout flow. Implemented Redux for state management and Firebase for backend services.',
                result: 'Result: Improved user transaction speed by 35% and increased conversion rates.'
            },
            {
                name: 'Admin Dashboard',
                tech: 'React, Tailwind CSS, REST APIs',
                description: 'Created a comprehensive admin panel for managing projects, users, and analytics. Integrated multiple REST APIs for data fetching and real-time updates.',
                result: 'Result: Saved clients 10+ hours of manual work per week.'
            },
            {
                name: 'Portfolio Website',
                tech: 'React, React Router, Tailwind CSS',
                description: 'Designed and developed a modern portfolio website with smooth animations and responsive design. Implemented routing, dynamic content loading, and contact form integration.',
                result: 'Result: Increased client inquiries by 50%.'
            }
        ],
        education: {
            degree: 'Bachelor of Science in Computer Science',
            university: 'University Name',
            duration: '2016 - 2020'
        },
        certifications: 'React - The Complete Guide (Udemy)\nReact Native - Advanced Concepts (Udemy)\nJavaScript Algorithms and Data Structures (freeCodeCamp)\nResponsive Web Design Certification (freeCodeCamp)',
        languages: 'English - Professional Working Proficiency\nBengali - Native'
    };

    // Use loaded CV data if available, otherwise use default
    const displayData = cvData || defaultData;

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
                        to="/cvFrom"
                        // target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2 border border-white/10"
                    >
                        <FaEdit /> Manage CV
                    </Link>
                </div>

                {/* CV Content */}
                <div className="p-8 md:p-12 print:p-12 print:bg-white print:text-black">
                    {/* Header */}
                    <header className="mb-12 pb-8 border-b border-white/10 print:border-gray-300">
                        <h1 className="text-5xl font-black mb-2 print:text-black">{displayData.personalInfo.name}</h1>
                        <h2 className="text-2xl text-indigo-400 font-semibold mb-6 print:text-gray-700">
                            {displayData.personalInfo.title}
                        </h2>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                            <a href={`mailto:${displayData.personalInfo.email}`} className="flex items-center gap-2 hover:text-white print:text-gray-600">
                                <FaEnvelope /> {displayData.personalInfo.email}
                            </a>
                            {displayData.personalInfo.phone && (
                                <span className="flex items-center gap-2">
                                    📱 {displayData.personalInfo.phone}
                                </span>
                            )}
                            {displayData.personalInfo.github && (
                                <a href={`https://${displayData.personalInfo.github}`} className="flex items-center gap-2 hover:text-white print:text-gray-600">
                                    <FaGithub /> {displayData.personalInfo.github}
                                </a>
                            )}
                            {displayData.personalInfo.linkedin && (
                                <a href={`https://${displayData.personalInfo.linkedin}`} className="flex items-center gap-2 hover:text-white print:text-gray-600">
                                    <FaLinkedin /> {displayData.personalInfo.linkedin}
                                </a>
                            )}
                        </div>
                    </header>

                    {/* Professional Summary */}
                    {displayData.summary && (
                        <section className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Professional Summary</h3>
                            <p className="text-gray-300 leading-relaxed print:text-gray-700">{displayData.summary}</p>
                        </section>
                    )}

                    {/* Technical Skills */}
                    <section className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {displayData.skills.frontend && (
                                <div>
                                    <h4 className="font-bold mb-2 text-white print:text-gray-900">Frontend Development</h4>
                                    <p className="text-gray-300 print:text-gray-700">{displayData.skills.frontend}</p>
                                </div>
                            )}
                            {displayData.skills.stateManagement && (
                                <div>
                                    <h4 className="font-bold mb-2 text-white print:text-gray-900">State Management</h4>
                                    <p className="text-gray-300 print:text-gray-700">{displayData.skills.stateManagement}</p>
                                </div>
                            )}
                            {displayData.skills.styling && (
                                <div>
                                    <h4 className="font-bold mb-2 text-white print:text-gray-900">Styling & UI</h4>
                                    <p className="text-gray-300 print:text-gray-700">{displayData.skills.styling}</p>
                                </div>
                            )}
                            {displayData.skills.backend && (
                                <div>
                                    <h4 className="font-bold mb-2 text-white print:text-gray-900">Backend & APIs</h4>
                                    <p className="text-gray-300 print:text-gray-700">{displayData.skills.backend}</p>
                                </div>
                            )}
                            {displayData.skills.tools && (
                                <div>
                                    <h4 className="font-bold mb-2 text-white print:text-gray-900">Tools & Workflow</h4>
                                    <p className="text-gray-300 print:text-gray-700">{displayData.skills.tools}</p>
                                </div>
                            )}
                            {displayData.skills.other && (
                                <div>
                                    <h4 className="font-bold mb-2 text-white print:text-gray-900">Other</h4>
                                    <p className="text-gray-300 print:text-gray-700">{displayData.skills.other}</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Professional Experience */}
                    {displayData.experience && displayData.experience.length > 0 && (
                        <section className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Professional Experience</h3>
                            {displayData.experience.map((exp, index) => (
                                exp.title && (
                                    <div key={index} className="mb-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="text-xl font-bold text-white print:text-gray-900">{exp.title}</h4>
                                                <p className="text-indigo-300 print:text-gray-600">{exp.company}</p>
                                            </div>
                                            {exp.duration && (
                                                <span className="text-gray-400 text-sm print:text-gray-600">{exp.duration}</span>
                                            )}
                                        </div>
                                        {exp.responsibilities && (
                                            <ul className="list-disc list-inside text-gray-300 space-y-2 print:text-gray-700">
                                                {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, i) => (
                                                    <li key={i}>{resp}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )
                            ))}
                        </section>
                    )}

                    {/* Key Projects */}
                    {displayData.projects && displayData.projects.length > 0 && (
                        <section className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Key Projects</h3>
                            {displayData.projects.map((project, index) => (
                                project.name && (
                                    <div key={index} className="mb-6">
                                        <h4 className="text-xl font-bold text-white mb-2 print:text-gray-900">{project.name}</h4>
                                        {project.tech && (
                                            <p className="text-gray-400 text-sm mb-2 print:text-gray-600">{project.tech}</p>
                                        )}
                                        {project.description && (
                                            <p className="text-gray-300 mb-2 print:text-gray-700">{project.description}</p>
                                        )}
                                        {project.result && (
                                            <p className="text-indigo-300 font-medium print:text-gray-900">{project.result}</p>
                                        )}
                                    </div>
                                )
                            ))}
                        </section>
                    )}

                    {/* Education */}
                    {displayData.education && displayData.education.degree && (
                        <section className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Education</h3>
                            <div className="mb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-white print:text-gray-900">{displayData.education.degree}</h4>
                                        {displayData.education.university && (
                                            <p className="text-indigo-300 print:text-gray-600">{displayData.education.university}</p>
                                        )}
                                    </div>
                                    {displayData.education.duration && (
                                        <span className="text-gray-400 text-sm print:text-gray-600">{displayData.education.duration}</span>
                                    )}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Certifications */}
                    {displayData.certifications && (
                        <section className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Certifications & Training</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 print:text-gray-700">
                                {displayData.certifications.split('\n').filter(c => c.trim()).map((cert, i) => (
                                    <li key={i}>{cert}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Languages */}
                    {displayData.languages && (
                        <section>
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Languages</h3>
                            <div className="text-gray-300 print:text-gray-700">
                                {displayData.languages.split('\n').filter(l => l.trim()).map((lang, i) => (
                                    <p key={i}>{lang}</p>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CV;
