import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaDownload } from 'react-icons/fa';

const AdminCVDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cvData, setCvData] = useState(null);
    const [allCVs, setAllCVs] = useState([]);

    useEffect(() => {
        const cvs = JSON.parse(localStorage.getItem('cvData') || '[]');
        setAllCVs(cvs);

        const current = cvs.find(cv => cv.id === id);
        if (current) {
            setCvData(current);
        }
    }, [id]);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this CV version?')) {
            const updatedCVs = allCVs.filter(cv => cv.id !== id);
            localStorage.setItem('cvData', JSON.stringify(updatedCVs));
            navigate('/admin');
        }
    };

    const handlePrint = () => {
        window.print();
    };

    if (!cvData) {
        return (
            <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center">
                <p className="text-gray-400">CV not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto flex gap-6">
                {/* Sidebar - CV Versions */}
                <aside className="w-64 flex-shrink-0 print:hidden">
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sticky top-24">
                        <h3 className="text-lg font-bold mb-4">CV Versions</h3>
                        <div className="space-y-2">
                            {allCVs.length === 0 ? (
                                <p className="text-sm text-gray-400">No CV versions yet</p>
                            ) : (
                                allCVs.map((cv) => (
                                    <Link
                                        key={cv.id}
                                        to={`/admin/cv/${cv.id}`}
                                        className={`block p-3 rounded-lg transition-all ${cv.id === id
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white/5 hover:bg-white/10 text-gray-300'
                                            }`}
                                    >
                                        <div className="text-sm font-bold">{cv.version}</div>
                                        <div className="text-xs opacity-75">{cv.date}</div>
                                    </Link>
                                ))
                            )}
                        </div>
                        <Link
                            to="/admin/cv"
                            className="mt-4 block w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold text-center transition-all"
                        >
                            + New CV
                        </Link>
                    </div>
                </aside>

                {/* Main Content - CV Details */}
                <main className="flex-1">
                    {/* Action Buttons */}
                    <div className="mb-6 flex gap-4 print:hidden">
                        <button
                            onClick={handlePrint}
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold flex items-center gap-2 transition-all"
                        >
                            <FaDownload /> Download PDF
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold flex items-center gap-2 transition-all"
                        >
                            <FaTrash /> Delete
                        </button>
                        <Link
                            to="/admin"
                            className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold border border-white/10 transition-all"
                        >
                            Back to Dashboard
                        </Link>
                    </div>

                    {/* CV Content */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 print:bg-white print:text-black print:border-0">
                        {/* Header */}
                        <header className="mb-12 pb-8 border-b border-white/10 print:border-gray-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h1 className="text-5xl font-black mb-2 print:text-black">{cvData.personalInfo.name}</h1>
                                    <h2 className="text-2xl text-indigo-400 font-semibold print:text-gray-700">
                                        {cvData.personalInfo.title}
                                    </h2>
                                </div>
                                <div className="text-sm text-gray-400 print:text-gray-600">
                                    <div>Version: {cvData.version}</div>
                                    <div>Date: {cvData.date}</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                                <span>📧 {cvData.personalInfo.email}</span>
                                {cvData.personalInfo.phone && <span>📱 {cvData.personalInfo.phone}</span>}
                                {cvData.personalInfo.github && <span>💻 {cvData.personalInfo.github}</span>}
                                {cvData.personalInfo.linkedin && <span>🔗 {cvData.personalInfo.linkedin}</span>}
                            </div>
                        </header>

                        {/* Professional Summary */}
                        {cvData.summary && (
                            <section className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Professional Summary</h3>
                                <p className="text-gray-300 leading-relaxed print:text-gray-700">{cvData.summary}</p>
                            </section>
                        )}

                        {/* Technical Skills */}
                        <section className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Technical Skills</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {cvData.skills.frontend && (
                                    <div>
                                        <h4 className="font-bold mb-2 text-white print:text-gray-900">Frontend Development</h4>
                                        <p className="text-gray-300 print:text-gray-700">{cvData.skills.frontend}</p>
                                    </div>
                                )}
                                {cvData.skills.stateManagement && (
                                    <div>
                                        <h4 className="font-bold mb-2 text-white print:text-gray-900">State Management</h4>
                                        <p className="text-gray-300 print:text-gray-700">{cvData.skills.stateManagement}</p>
                                    </div>
                                )}
                                {cvData.skills.styling && (
                                    <div>
                                        <h4 className="font-bold mb-2 text-white print:text-gray-900">Styling & UI</h4>
                                        <p className="text-gray-300 print:text-gray-700">{cvData.skills.styling}</p>
                                    </div>
                                )}
                                {cvData.skills.backend && (
                                    <div>
                                        <h4 className="font-bold mb-2 text-white print:text-gray-900">Backend & APIs</h4>
                                        <p className="text-gray-300 print:text-gray-700">{cvData.skills.backend}</p>
                                    </div>
                                )}
                                {cvData.skills.tools && (
                                    <div>
                                        <h4 className="font-bold mb-2 text-white print:text-gray-900">Tools & Workflow</h4>
                                        <p className="text-gray-300 print:text-gray-700">{cvData.skills.tools}</p>
                                    </div>
                                )}
                                {cvData.skills.other && (
                                    <div>
                                        <h4 className="font-bold mb-2 text-white print:text-gray-900">Other</h4>
                                        <p className="text-gray-300 print:text-gray-700">{cvData.skills.other}</p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Professional Experience */}
                        {cvData.experience && cvData.experience.length > 0 && cvData.experience[0].title && (
                            <section className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Professional Experience</h3>
                                {cvData.experience.map((exp, index) => (
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
                                                <ul className="list-disc list-inside text-gray-300 space-y-1 print:text-gray-700">
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
                        {cvData.projects && cvData.projects.length > 0 && cvData.projects[0].name && (
                            <section className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Key Projects</h3>
                                {cvData.projects.map((project, index) => (
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
                        {cvData.education && cvData.education.degree && (
                            <section className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Education</h3>
                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="text-xl font-bold text-white print:text-gray-900">{cvData.education.degree}</h4>
                                            {cvData.education.university && (
                                                <p className="text-indigo-300 print:text-gray-600">{cvData.education.university}</p>
                                            )}
                                        </div>
                                        {cvData.education.duration && (
                                            <span className="text-gray-400 text-sm print:text-gray-600">{cvData.education.duration}</span>
                                        )}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Certifications */}
                        {cvData.certifications && (
                            <section className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Certifications & Training</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 print:text-gray-700">
                                    {cvData.certifications.split('\n').filter(c => c.trim()).map((cert, i) => (
                                        <li key={i}>{cert}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Languages */}
                        {cvData.languages && (
                            <section>
                                <h3 className="text-2xl font-bold mb-4 text-indigo-400 print:text-gray-900">Languages</h3>
                                <p className="text-gray-300 print:text-gray-700">{cvData.languages}</p>
                            </section>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminCVDetails;
