import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash, FaDownload } from 'react-icons/fa';
import { fetchCvs, fetchCvById, deleteCv } from '../features/cv/cvSlice';

const AdminCVDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cvs: allCVs, currentCv: cvData, loading } = useSelector((state) => state.cv);

    useEffect(() => {
        dispatch(fetchCvs());
        if (id) {
            dispatch(fetchCvById(id));
        }
    }, [id, dispatch]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this CV version?')) {
            await dispatch(deleteCv(id));
            navigate('/admin');
        }
    };

    const handlePrint = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center bg-slate-100 dark:bg-secondary">
                <p className="text-indigo-600 animate-pulse font-bold">Loading CV Details...</p>
            </div>
        );
    }

    if (!cvData) {
        return (
            <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center bg-slate-100 dark:bg-secondary">
                <p className="text-gray-400">CV not found on server</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-slate-100 dark:bg-secondary">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* Sidebar - CV Versions */}
                <aside className="w-full lg:w-72 flex-shrink-0 print:hidden order-2 lg:order-1">
                    <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sticky top-24 shadow-sm dark:shadow-none">
                        <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">CV Versions</h3>
                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {allCVs.length === 0 ? (
                                <p className="text-sm text-slate-500 dark:text-gray-400">No CV versions yet</p>
                            ) : (
                                allCVs.map((cv) => (
                                    <Link
                                        key={cv.id}
                                        to={`/admin/cv/${cv.id}`}
                                        className={`block p-4 rounded-xl transition-all ${cv.id === id
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                                            : 'bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300'
                                            }`}
                                    >
                                        <div className="text-sm font-bold truncate leading-none mb-2">{cv.version}</div>
                                        <div className="text-xs opacity-60">{cv.date}</div>
                                    </Link>
                                ))
                            )}
                        </div>
                        <Link
                            to="/admin/cv"
                            className="mt-6 block w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-black text-center transition-all uppercase tracking-widest active:scale-[0.98]"
                        >
                            + New CV
                        </Link>
                    </div>
                </aside>

                {/* Main Content - CV Details */}
                <main className="flex-1 order-1 lg:order-2">
                    {/* Action Buttons */}
                    <div className="mb-8 flex flex-wrap gap-4 print:hidden justify-center lg:justify-start">
                        <button
                            onClick={handlePrint}
                            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 text-sm"
                        >
                            <FaDownload /> Download PDF
                        </button>
                        <button
                            onClick={handleDelete}
                            className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 text-sm"
                        >
                            <FaTrash /> Delete
                        </button>
                        <Link
                            to="/admin"
                            className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10 transition-all text-center text-sm"
                        >
                            Back to Dashboard
                        </Link>
                    </div>

                    {/* CV Content */}
                    <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 md:p-12 print:bg-white print:text-black print:border-0 shadow-2xl">
                        {/* Header */}
                        <header className="mb-10 pb-8 border-b border-slate-200 dark:border-white/10">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4 mb-6">
                                <div>
                                    <h1 className="text-3xl sm:text-5xl font-black mb-2 print:text-black text-slate-900 dark:text-white leading-tight">{cvData.personalInfo.name}</h1>
                                    <h2 className="text-lg sm:text-2xl text-indigo-600 dark:text-indigo-400 font-bold print:text-gray-700">
                                        {cvData.personalInfo.title}
                                    </h2>
                                </div>
                                <div className="text-xs md:text-sm text-slate-500 print:text-gray-600 font-bold uppercase tracking-widest">
                                    <div className="mb-1">Version: <span className="text-slate-900 dark:text-white print:text-black">{cvData.version}</span></div>
                                    <div>Date: <span className="text-slate-900 dark:text-white print:text-black">{cvData.date}</span></div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-gray-400 print:text-gray-600 font-inter">
                                <span className="flex items-center gap-2">📧 {cvData.personalInfo.email}</span>
                                {cvData.personalInfo.phone && <span className="flex items-center gap-2">📱 {cvData.personalInfo.phone}</span>}
                                {cvData.personalInfo.github && <span className="flex items-center gap-2">💻 {cvData.personalInfo.github}</span>}
                                {cvData.personalInfo.linkedin && <span className="flex items-center gap-2">🔗 {cvData.personalInfo.linkedin}</span>}
                            </div>
                        </header>

                        {/* Professional Summary */}
                        {cvData.summary && (
                            <section className="mb-12">
                                <h3 className="text-xl md:text-2xl font-black mb-4 text-indigo-600 dark:text-indigo-400 uppercase tracking-widest text-xs print:text-gray-900">Professional Summary</h3>
                                <p className="text-slate-700 dark:text-gray-300 leading-relaxed print:text-gray-700 text-sm md:text-base">{cvData.summary}</p>
                            </section>
                        )}

                        {/* Technical Skills */}
                        <section className="mb-12">
                            <h3 className="text-xl md:text-2xl font-black mb-6 text-indigo-600 dark:text-indigo-400 uppercase tracking-widest text-xs print:text-gray-900">Technical Skills</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {Object.entries(cvData.skills).map(([key, value]) => (
                                    value && (
                                        <div key={key}>
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white print:text-gray-900 text-sm md:text-base capitalize">
                                                {key.replace(/([A-Z])/g, ' $1')}
                                            </h4>
                                            <p className="text-slate-500 dark:text-gray-400 print:text-gray-700 text-sm">{value}</p>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        {/* Professional Experience */}
                        {cvData.experience && cvData.experience.length > 0 && cvData.experience[0].title && (
                            <section className="mb-12">
                                <h3 className="text-xl md:text-2xl font-black mb-6 text-indigo-400 uppercase tracking-widest text-xs print:text-gray-900">Professional Experience</h3>
                                <div className="space-y-8">
                                    {cvData.experience.map((exp, index) => (
                                        exp.title && (
                                            <div key={index} className="relative pl-6 border-l border-white/10 print:border-gray-200">
                                                <div className="absolute w-2 h-2 rounded-full bg-indigo-500 -left-[5px] top-2" />
                                                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                                                    <div>
                                                        <h4 className="text-lg md:text-xl font-bold text-white print:text-gray-900">{exp.title}</h4>
                                                        <p className="text-indigo-400 font-medium print:text-gray-600">{exp.company}</p>
                                                    </div>
                                                    {exp.duration && (
                                                        <span className="text-slate-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest print:text-gray-600 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">{exp.duration}</span>
                                                    )}
                                                </div>
                                                {exp.responsibilities && (
                                                    <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-gray-400 space-y-2 print:text-gray-700 text-sm md:text-base">
                                                        {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, i) => (
                                                            <li key={i}>{resp}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Key Projects */}
                        {cvData.projects && cvData.projects.length > 0 && cvData.projects[0].name && (
                            <section className="mb-12">
                                <h3 className="text-xl md:text-2xl font-black mb-6 text-indigo-400 uppercase tracking-widest text-xs print:text-gray-900">Key Projects</h3>
                                <div className="grid grid-cols-1 gap-8">
                                    {cvData.projects.map((project, index) => (
                                        project.name && (
                                            <div key={index} className="p-6 bg-white/5 border border-white/5 rounded-xl">
                                                <h4 className="text-lg md:text-xl font-bold text-white mb-2 print:text-gray-900">{project.name}</h4>
                                                {project.tech && (
                                                    <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 print:text-gray-600">{project.tech}</p>
                                                )}
                                                {project.description && (
                                                    <p className="text-slate-600 dark:text-gray-400 mb-4 print:text-gray-700 text-sm md:text-base">{project.description}</p>
                                                )}
                                                {project.result && (
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                        <p className="text-white text-sm font-bold print:text-gray-900">{project.result}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Education */}
                        {cvData.education && cvData.education.degree && (
                            <section className="mb-12">
                                <h3 className="text-xl md:text-2xl font-black mb-6 text-indigo-400 uppercase tracking-widest text-xs print:text-gray-900">Education</h3>
                                <div className="p-6 bg-indigo-900/10 border border-indigo-500/10 rounded-xl">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-white print:text-gray-900">{cvData.education.degree}</h4>
                                            {cvData.education.university && (
                                                <p className="text-indigo-400 font-medium print:text-gray-600 mt-1">{cvData.education.university}</p>
                                            )}
                                        </div>
                                        {cvData.education.duration && (
                                            <span className="text-slate-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest print:text-gray-600">{cvData.education.duration}</span>
                                        )}
                                    </div>
                                </div>
                            </section>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {/* Certifications */}
                            {cvData.certifications && (
                                <section>
                                    <h3 className="text-xl md:text-2xl font-black mb-4 text-indigo-400 uppercase tracking-widest text-xs print:text-gray-900">Certifications</h3>
                                    <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-gray-400 space-y-2 print:text-gray-700 text-sm">
                                        {cvData.certifications.split('\n').filter(c => c.trim()).map((cert, i) => (
                                            <li key={i}>{cert}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* Languages */}
                            {cvData.languages && (
                                <section>
                                    <h3 className="text-xl md:text-2xl font-black mb-4 text-indigo-400 uppercase tracking-widest text-xs print:text-gray-900">Languages</h3>
                                    <p className="text-slate-600 dark:text-gray-400 print:text-gray-700 text-sm">{cvData.languages}</p>
                                </section>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminCVDetails;
