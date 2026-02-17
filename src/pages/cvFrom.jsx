import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CvFrom = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        personalInfo: {
            name: 'NK Noyon',
            title: 'React & React Native Developer',
            email: 'nknoyon01936@gmail.com',
            phone: '+880 1234567890',
            github: 'github.com/noyonkummerdas',
            linkedin: 'linkedin.com/in/noyon'
        },
        summary: '',
        skills: {
            frontend: '',
            stateManagement: '',
            styling: '',
            backend: '',
            tools: '',
            other: ''
        },
        experience: [{ title: '', company: '', duration: '', responsibilities: '' }],
        projects: [{ name: '', description: '', tech: '', result: '' }],
        education: { degree: '', university: '', duration: '' },
        certifications: '',
        languages: ''
    });

    const handlePersonalInfoChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value }
        }));
    };

    const handleSkillsChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            skills: { ...prev.skills, [field]: value }
        }));
    };

    const handleExperienceChange = (index, field, value) => {
        const newExperience = [...formData.experience];
        newExperience[index][field] = value;
        setFormData(prev => ({ ...prev, experience: newExperience }));
    };

    const addExperience = () => {
        setFormData(prev => ({
            ...prev,
            experience: [...prev.experience, { title: '', company: '', duration: '', responsibilities: '' }]
        }));
    };

    const removeExperience = (index) => {
        setFormData(prev => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index)
        }));
    };

    const handleProjectChange = (index, field, value) => {
        const newProjects = [...formData.projects];
        newProjects[index][field] = value;
        setFormData(prev => ({ ...prev, projects: newProjects }));
    };

    const addProject = () => {
        setFormData(prev => ({
            ...prev,
            projects: [...prev.projects, { name: '', description: '', tech: '', result: '' }]
        }));
    };

    const removeProject = (index) => {
        setFormData(prev => ({
            ...prev,
            projects: prev.projects.filter((_, i) => i !== index)
        }));
    };

    const handleEducationChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            education: { ...prev.education, [field]: value }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get existing CVs from localStorage
        const existingCVs = JSON.parse(localStorage.getItem('cvData') || '[]');

        // Generate version number based on existing CVs count
        const versionNumber = String(existingCVs.length + 1).padStart(2, '0');

        const cvData = {
            id: Date.now().toString(),
            version: `CV-v-${versionNumber}`,
            date: new Date().toISOString().split('T')[0],
            ...formData
        };

        existingCVs.push(cvData);
        localStorage.setItem('cvData', JSON.stringify(existingCVs));

        alert('CV saved successfully!');
        navigate(`/cv`);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 text-center sm:text-left">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black mb-2 text-white">CV Management</h1>
                        <p className="text-sm text-gray-400">Create and manage your CV versions</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-8">
                    {/* Personal Information */}
                    <section className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { label: 'Full Name', field: 'name', type: 'text' },
                                { label: 'Title', field: 'title', type: 'text' },
                                { label: 'Email', field: 'email', type: 'email' },
                                { label: 'Phone', field: 'phone', type: 'tel' },
                                { label: 'GitHub', field: 'github', type: 'text' },
                                { label: 'LinkedIn', field: 'linkedin', type: 'text' }
                            ].map((input) => (
                                <div key={input.field}>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">{input.label}</label>
                                    <input
                                        type={input.type}
                                        value={formData.personalInfo[input.field]}
                                        onChange={(e) => handlePersonalInfoChange(input.field, e.target.value)}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                        required={['name', 'title', 'email'].includes(input.field)}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Professional Summary */}
                    <section className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Professional Summary</h2>
                        <textarea
                            value={formData.summary}
                            onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none h-32 text-white text-sm font-inter"
                            placeholder="Brief overview of your expertise..."
                            required
                        />
                    </section>

                    {/* Skills */}
                    <section className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Technical Skills</h2>
                        <div className="space-y-4">
                            {[
                                { label: 'Frontend Development', field: 'frontend' },
                                { label: 'State Management', field: 'stateManagement' },
                                { label: 'Styling & UI', field: 'styling' },
                                { label: 'Backend & APIs', field: 'backend' },
                                { label: 'Tools & Workflow', field: 'tools' },
                                { label: 'Other', field: 'other' }
                            ].map((skill) => (
                                <div key={skill.field}>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">{skill.label}</label>
                                    <input
                                        type="text"
                                        value={formData.skills[skill.field]}
                                        onChange={(e) => handleSkillsChange(skill.field, e.target.value)}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                        placeholder={`e.g. ${skill.label === 'Frontend Development' ? 'React, React Native' : '...'}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Professional Experience</h2>
                            <button
                                type="button"
                                onClick={addExperience}
                                className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-black text-white uppercase tracking-widest transition-all"
                            >
                                + Add Experience
                            </button>
                        </div>
                        <div className="space-y-6">
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="p-6 bg-white/5 rounded-2xl border border-white/10 relative group">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-sm font-black text-white uppercase tracking-widest">Experience {index + 1}</h3>
                                        {formData.experience.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeExperience(index)}
                                                className="text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Job Title</label>
                                            <input
                                                type="text"
                                                value={exp.title}
                                                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Company</label>
                                            <input
                                                type="text"
                                                value={exp.company}
                                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Duration</label>
                                            <input
                                                type="text"
                                                value={exp.duration}
                                                onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                                placeholder="e.g., 2020 - 2022"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Responsibilities (one per line)</label>
                                            <textarea
                                                value={exp.responsibilities}
                                                onChange={(e) => handleExperienceChange(index, 'responsibilities', e.target.value)}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none h-32 text-white text-sm font-inter"
                                                placeholder="List your key responsibilities..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Key Projects</h2>
                            <button
                                type="button"
                                onClick={addProject}
                                className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-black text-white uppercase tracking-widest transition-all"
                            >
                                + Add Project
                            </button>
                        </div>
                        <div className="space-y-6">
                            {formData.projects.map((project, index) => (
                                <div key={index} className="p-6 bg-white/5 rounded-2xl border border-white/10 relative group">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-sm font-black text-white uppercase tracking-widest">Project {index + 1}</h3>
                                        {formData.projects.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeProject(index)}
                                                className="text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Project Name</label>
                                            <input
                                                type="text"
                                                value={project.name}
                                                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Description</label>
                                            <textarea
                                                value={project.description}
                                                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none h-24 text-white text-sm font-inter"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Technologies</label>
                                                <input
                                                    type="text"
                                                    value={project.tech}
                                                    onChange={(e) => handleProjectChange(index, 'tech', e.target.value)}
                                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                                    placeholder="React, Node.js, MongoDB"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Result/Impact</label>
                                                <input
                                                    type="text"
                                                    value={project.result}
                                                    onChange={(e) => handleProjectChange(index, 'result', e.target.value)}
                                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                                    placeholder="e.g. Improved Performance by 40%"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Degree</label>
                                <input
                                    type="text"
                                    value={formData.education.degree}
                                    onChange={(e) => handleEducationChange('degree', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                    placeholder="e.g. B.Sc in Computer Science"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">University</label>
                                <input
                                    type="text"
                                    value={formData.education.university}
                                    onChange={(e) => handleEducationChange('university', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-400">Duration</label>
                                <input
                                    type="text"
                                    value={formData.education.duration}
                                    onChange={(e) => handleEducationChange('duration', e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white text-sm"
                                    placeholder="2016 - 2020"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Certifications & Languages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Certifications</h2>
                            <textarea
                                value={formData.certifications}
                                onChange={(e) => setFormData(prev => ({ ...prev, certifications: e.target.value }))}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none h-32 text-white text-sm font-inter"
                                placeholder="List your certifications..."
                            />
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-widest text-xs">Languages</h2>
                            <textarea
                                value={formData.languages}
                                onChange={(e) => setFormData(prev => ({ ...prev, languages: e.target.value }))}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none h-32 text-white text-sm font-inter"
                                placeholder="English - Professional..."
                            />
                        </section>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
                        <button
                            type="submit"
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            Save CV
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/cv')}
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-black uppercase tracking-widest text-xs border border-white/10 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CvFrom;
