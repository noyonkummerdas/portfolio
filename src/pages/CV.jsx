import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchCvs } from '../features/cv/cvSlice';
import profilePic from '../assets/profile/profilePic.png';

const CV = () => {
    const dispatch = useDispatch();
    const { cvs, loading } = useSelector((state) => state.cv);

    useEffect(() => {
        dispatch(fetchCvs());
    }, [dispatch]);

    const handlePrint = () => {
        window.print();
    };

    // Default/Placeholder CV data
    const defaultData = {
        personalInfo: {
            name: 'Noyon Kumar Das',
            title: 'React & React Native Developer',
            email: 'nknoyon01936@gmail.com',
            github: 'github.com/noyonkummerdas',
            linkedin: 'linkedin.com/in/noyon'
        },
        summary: 'Experienced React and React Native Developer with a proven track record of building scalable, user-friendly web and mobile applications. Specialized in creating high-performance solutions that drive business value through clean architecture, efficient code, and exceptional user experiences.',
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
                description: 'Developed a full-featured shopping app with product catalog, cart management, and checkout flow.',
                result: 'Result: Improved user transaction speed by 35% and increased conversion rates.'
            },
            {
                name: 'Admin Dashboard',
                tech: 'React, Tailwind CSS, REST APIs',
                description: 'Created a comprehensive admin panel for managing projects, users, and analytics.',
                result: 'Result: Saved clients 10+ hours of manual work per week.'
            },
            {
                name: 'Portfolio Website',
                tech: 'React, React Router, Tailwind CSS',
                description: 'Designed and developed a modern portfolio website with smooth animations and responsive design.',
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

    // Since the backend presumably returns PDF uploads and not full JSON data,
    // we use the default data for the "View" part, but use the Redux list for "Versions" and "Download".
    // If there is a latest CV with a PDF, we use that link.

    // Sort CVs by createdAt desc if not already sorted
    const sortedCvs = [...cvs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const latestCv = sortedCvs.length > 0 ? sortedCvs[0] : null;

    // Merge default data with latest CV data if available
    const displayData = latestCv ? {
        ...defaultData,
        personalInfo: latestCv.personalInfo ? (typeof latestCv.personalInfo === 'string' ? JSON.parse(latestCv.personalInfo) : latestCv.personalInfo) : defaultData.personalInfo,
        summary: latestCv.summary || defaultData.summary,
        skills: latestCv.skills ? (typeof latestCv.skills === 'string' ? JSON.parse(latestCv.skills) : latestCv.skills) : defaultData.skills,
        experience: latestCv.experience ? (typeof latestCv.experience === 'string' ? JSON.parse(latestCv.experience) : latestCv.experience) : defaultData.experience,
        projects: latestCv.projects ? (typeof latestCv.projects === 'string' ? JSON.parse(latestCv.projects) : latestCv.projects) : defaultData.projects,
        education: latestCv.education ? (typeof latestCv.education === 'string' ? JSON.parse(latestCv.education) : latestCv.education) : defaultData.education,
        certifications: latestCv.certifications || defaultData.certifications,
        languages: latestCv.languages || defaultData.languages,
        imageUrl: latestCv.imageUrl // New field from backend
    } : defaultData;

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 print:pt-0 print:pb-0 print:px-0 print:min-h-0">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-10">
                {/* Main Content */}
                <div className="flex-1 order-2 lg:order-1">
                    <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
                        {/* Action Buttons */}
                        <div className="p-6 border-b border-white/10 print:hidden flex flex-col sm:flex-row gap-4">
                            {latestCv ? (
                                <a
                                    href={latestCv.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 shadow-lg shadow-indigo-500/20"
                                >
                                    <FaDownload /> Download Latest PDF ({latestCv.version})
                                </a>
                            ) : (
                                <button
                                    onClick={handlePrint}
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 shadow-lg shadow-indigo-500/20"
                                >
                                    <FaDownload /> Download PDF
                                </button>
                            )}

                            <Link
                                to="/admin/cv"
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 transform active:scale-95"
                            >
                                <FaEdit /> Upload CV
                            </Link>
                        </div>

                        {/* CV Content */}
                        <div className="p-6 sm:p-8 md:p-12 print:p-12 print:bg-white print:text-black">
                            {/* Header */}
                            <header className="mb-12 pb-8 border-b border-white/10 print:border-gray-300 flex flex-col md:flex-row print:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
                                <div className="flex-1 w-full">
                                    <h1 className="text-4xl sm:text-5xl font-black mb-2 text-slate-900 dark:text-white print:text-black tracking-tighter">{displayData.personalInfo.name}</h1>
                                    <h2 className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6 print:text-gray-700">
                                        {displayData.personalInfo.title}
                                    </h2>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500 dark:text-gray-400 print:text-gray-600">
                                        <a href={`mailto:${displayData.personalInfo.email}`} className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-white print:text-gray-600 transition-colors">
                                            <FaEnvelope /> <span className="break-all">{displayData.personalInfo.email}</span>
                                        </a>
                                        {displayData.personalInfo.phone && (
                                            <span className="flex items-center gap-2">
                                                📱 {displayData.personalInfo.phone}
                                            </span>
                                        )}
                                        {displayData.personalInfo.github && (
                                            <a href={`https://${displayData.personalInfo.github}`} className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-white print:text-gray-600 transition-colors">
                                                <FaGithub /> {displayData.personalInfo.github}
                                            </a>
                                        )}
                                        {displayData.personalInfo.linkedin && (
                                            <a href={`https://${displayData.personalInfo.linkedin}`} className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-white print:text-gray-600 transition-colors">
                                                <FaLinkedin /> {displayData.personalInfo.linkedin}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="flex-shrink-0 animate-fade-in">
                                    <img
                                        src={displayData.imageUrl ? (displayData.imageUrl.startsWith('http') ? displayData.imageUrl : `http://localhost:5000${displayData.imageUrl}`) : profilePic}
                                        alt={displayData.personalInfo.name}
                                        className="w-40 h-40 md:w-[2.5in] md:h-[2.5in] object-cover rounded-2xl md:rounded-none bg-white border border-white/10 print:border-gray-300 shadow-2xl"
                                    />
                                </div>
                            </header>

                            {/* Professional Summary */}
                            {displayData.summary && (
                                <section className="mb-10">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 print:text-gray-900 flex items-center gap-3">
                                        <span className="w-8 h-px bg-indigo-600/30 dark:bg-indigo-400/30"></span> Summary
                                    </h3>
                                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed print:text-gray-700 text-sm md:text-base">{displayData.summary}</p>
                                </section>
                            )}

                            {/* Technical Skills */}
                            <section className="mb-10">
                                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 print:text-gray-900 flex items-center gap-3">
                                    <span className="w-8 h-px bg-indigo-600/30 dark:bg-indigo-400/30"></span> Skills
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {displayData.skills.frontend && (
                                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white print:text-gray-900">Frontend Development</h4>
                                            <p className="text-slate-600 dark:text-gray-300 print:text-gray-700 text-sm">{displayData.skills.frontend}</p>
                                        </div>
                                    )}
                                    {displayData.skills.stateManagement && (
                                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white print:text-gray-900">State Management</h4>
                                            <p className="text-slate-600 dark:text-gray-300 print:text-gray-700 text-sm">{displayData.skills.stateManagement}</p>
                                        </div>
                                    )}
                                    {displayData.skills.styling && (
                                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white print:text-gray-900">Styling & UI</h4>
                                            <p className="text-slate-600 dark:text-gray-300 print:text-gray-700 text-sm">{displayData.skills.styling}</p>
                                        </div>
                                    )}
                                    {displayData.skills.backend && (
                                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white print:text-gray-900">Backend & APIs</h4>
                                            <p className="text-slate-600 dark:text-gray-300 print:text-gray-700 text-sm">{displayData.skills.backend}</p>
                                        </div>
                                    )}
                                </div>
                            </section>

                            {/* Professional Experience */}
                            {displayData.experience && displayData.experience.length > 0 && (
                                <section className="mb-10">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 print:text-gray-900 flex items-center gap-3">
                                        <span className="w-8 h-px bg-indigo-600/30 dark:bg-indigo-400/30"></span> Experience
                                    </h3>
                                    {displayData.experience.map((exp, index) => (
                                        exp.title && (
                                            <div key={index} className="mb-8 relative pl-6 border-l-2 border-indigo-600/20 dark:border-indigo-500/20 last:mb-0">
                                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-secondary shadow-lg"></div>
                                                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                                                    <div>
                                                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-gray-900">{exp.title}</h4>
                                                        <p className="text-indigo-600 dark:text-indigo-300 print:text-gray-600 font-medium">{exp.company}</p>
                                                    </div>
                                                    {exp.duration && (
                                                        <span className="text-slate-500 dark:text-gray-500 text-xs font-bold uppercase tracking-wider print:text-gray-600">{exp.duration}</span>
                                                    )}
                                                </div>
                                                {exp.responsibilities && (
                                                    <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-gray-300 space-y-2 print:text-gray-700 text-sm md:text-base mt-4">
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

                            {/* Signature Section */}
                            <div className="mt-20 flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-slate-200 dark:border-white/5 pt-12 print:border-gray-200 gap-12 sm:gap-0">
                                <div className="flex flex-col items-center sm:items-start gap-2">
                                    <div className="w-48 border-b border-slate-300 dark:border-white/20 print:border-gray-400"></div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 print:text-gray-600">Date</p>
                                </div>
                                <div className="flex flex-col items-center sm:items-end gap-2 text-right">
                                    <div className="w-48 border-b border-slate-300 dark:border-white/20 print:border-gray-400"></div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 print:text-gray-600">Signature</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-72 flex-shrink-0 print:hidden order-1 lg:order-2">
                    <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sticky top-24 shadow-xl">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            CV History
                        </h3>
                        <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {loading && <p className="text-sm text-slate-500 dark:text-gray-400 animate-pulse">Fetching versions...</p>}
                            {!loading && sortedCvs.length === 0 ? (
                                <div className="text-sm text-slate-500 dark:text-gray-400 py-4 italic">
                                    <p>No saved versions yet.</p>
                                </div>
                            ) : (
                                sortedCvs.map((cv) => (
                                    <div
                                        key={cv._id || cv.id}
                                        className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-all group cursor-pointer"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{cv.title || 'Resume'}</div>
                                                <div className="text-xs text-slate-500 dark:text-gray-500 font-bold uppercase tracking-tight mt-1">
                                                    v{cv.version} • {new Date(cv.createdAt).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <a
                                                href={cv.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all shadow-sm"
                                                title="Download PDF"
                                            >
                                                <FaDownload size={12} />
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <Link
                            to="/admin/cv"
                            className="block w-full px-6 py-4 bg-primary text-secondary rounded-xl text-sm font-black text-center transition-all transform active:scale-95 hover:bg-white shadow-lg shadow-primary/10"
                        >
                            + NEW VERSION
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CV;
