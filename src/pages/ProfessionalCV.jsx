import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaDownload } from 'react-icons/fa';

const ProfessionalCV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-slate-50 dark:bg-secondary transition-colors duration-300">
            {/* Action Bar - Hidden in Print */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-end print:hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-secondary font-black rounded-xl hover:bg-white transition-all shadow-lg active:scale-95"
                >
                    <FaDownload /> Download / Print CV
                </button>
            </div>

            {/* CV Container */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-surface/40 border border-slate-200 dark:border-white/10 p-8 md:p-12 shadow-2xl print:shadow-none print:border-0 print:p-0 print:bg-white print:text-black">

                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start gap-8 border-b-2 border-primary/20 pb-10 mb-10">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter print:text-black">
                            [YOUR NAME]
                        </h1>
                        <p className="text-xl text-primary font-bold mb-6 print:text-indigo-600">
                            Professional Title / Role
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-gray-400 print:text-gray-700">
                            <span className="flex items-center gap-2 italic"><FaPhone className="text-primary print:text-indigo-600" /> [Your Phone Number]</span>
                            <span className="flex items-center gap-2 italic"><FaEnvelope className="text-primary print:text-indigo-600" /> [Your Email]</span>
                            <span className="flex items-center gap-2 italic"><FaMapMarkerAlt className="text-primary print:text-indigo-600" /> [Your Address]</span>
                            <span className="flex items-center gap-2 italic"><FaGlobe className="text-primary print:text-indigo-600" /> [Portfolio/LinkedIn]</span>
                        </div>
                    </div>

                    {/* Profile Picture Space */}
                    <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-slate-100 dark:border-white/10 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0 animate-fade-in print:border-gray-200">
                        <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest text-center px-4">
                            Place Profile Picture Here
                        </span>
                    </div>
                </header>

                {/* Main Content Sections */}
                <div className="space-y-10">

                    {/* Career Objective */}
                    <section>
                        <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-4 flex items-center gap-3 print:text-black">
                            <span className="w-8 h-[2px] bg-primary print:bg-black"></span> Professional Summary
                        </h3>
                        <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-inter print:text-gray-800">
                            [Write 1-2 lines about your career goal or professional summary. Describe your passion for excellence and how you aim to contribute to a forward-thinking organization.]
                        </p>
                    </section>

                    {/* Education */}
                    <section>
                        <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-6 flex items-center gap-3 print:text-black">
                            <span className="w-8 h-[2px] bg-primary print:bg-black"></span> Education
                        </h3>
                        <div className="pl-11 relative">
                            <div className="absolute left-[3px] top-2 w-[2px] h-full bg-slate-200 dark:bg-white/10 print:bg-gray-200"></div>
                            <div className="absolute left-[-4px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-secondary print:bg-black"></div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black">[Your Degree]</h4>
                                <p className="text-primary font-bold print:text-indigo-600">[School / College / University Name]</p>
                                <div className="flex justify-between mt-1 text-sm text-slate-500 dark:text-gray-400 print:text-gray-600 font-bold italic">
                                    <span>Passing Year: [Year]</span>
                                    <span>GPA: [GPA]</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-6 flex items-center gap-3 print:text-black">
                            <span className="w-8 h-[2px] bg-primary print:bg-black"></span> Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {["Programming", "Tools", "Language", "Soft Skills", "Design", "Project Management"].map((skill, idx) => (
                                <span key={idx} className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-700 dark:text-gray-300 text-sm font-bold print:border-gray-300 print:bg-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-6 flex items-center gap-3 print:text-black">
                            <span className="w-8 h-[2px] bg-primary print:bg-black"></span> Experience / Internship
                        </h3>
                        <div className="pl-11 relative">
                            <div className="absolute left-[3px] top-2 w-[2px] h-full bg-slate-200 dark:bg-white/10 print:bg-gray-200"></div>
                            <div className="absolute left-[-4px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-secondary print:bg-black"></div>
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between mb-2">
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black">[Job / Internship Role]</h4>
                                    <span className="text-xs font-black uppercase text-slate-400 print:text-gray-600">[Duration]</span>
                                </div>
                                <p className="text-primary font-bold mb-4 print:text-indigo-600">[Company / Organization Name]</p>
                                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-gray-400 text-sm md:text-base print:text-gray-800">
                                    <li>Bullet point 1: Key responsibility and achievement.</li>
                                    <li>Bullet point 2: Key responsibility and achievement.</li>
                                    <li>Bullet point 3: Key responsibility and achievement.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-6 flex items-center gap-3 print:text-black">
                            <span className="w-8 h-[2px] bg-primary print:bg-black"></span> Projects
                        </h3>
                        <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl print:bg-white print:border-gray-200">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black">[Project Name]</h4>
                            <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-3 print:text-indigo-600">[Technologies Used]</p>
                            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed print:text-gray-800">
                                [Short Description: What you did in this project and the value it created.]
                            </p>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Certifications */}
                        <section>
                            <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-4 flex items-center gap-3 print:text-black">
                                <span className="w-8 h-[2px] bg-primary print:bg-black"></span> Certifications
                            </h3>
                            <ul className="space-y-3">
                                <li className="text-sm text-slate-700 dark:text-gray-300 print:text-gray-800 font-inter">
                                    <span className="font-bold block">[Certificate Name]</span>
                                    <span className="text-xs text-slate-400">[Organization] • [Year]</span>
                                </li>
                            </ul>
                        </section>

                        {/* Hobbies */}
                        <section>
                            <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-4 flex items-center gap-3 print:text-black">
                                <span className="w-8 h-[2px] bg-primary print:bg-black"></span> Interests
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Hobby 1", "Hobby 2", "Hobby 3"].map((hobby, i) => (
                                    <span key={i} className="text-sm text-slate-600 dark:text-gray-400 print:text-gray-800 italic">• {hobby}</span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer Signature */}
                <footer className="mt-20 pt-10 border-t border-slate-200 dark:border-white/10 flex justify-end">
                    <div className="text-center w-48 italic">
                        <div className="border-b border-slate-900 dark:border-white h-8 mb-2"></div>
                        <p className="text-xs font-bold text-slate-400">Authorized Signature</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ProfessionalCV;
