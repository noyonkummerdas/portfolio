import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminCVForm = () => {
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

        const cvData = {
            id: Date.now().toString(),
            version: `v${new Date().getTime()}`,
            date: new Date().toISOString().split('T')[0],
            ...formData
        };

        // Get existing CVs from localStorage
        const existingCVs = JSON.parse(localStorage.getItem('cvData') || '[]');
        existingCVs.push(cvData);
        localStorage.setItem('cvData', JSON.stringify(existingCVs));

        alert('CV saved successfully!');
        navigate(`/admin/cv/${cvData.id}`);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-black mb-2">CV Management</h1>
                    <p className="text-gray-400">Create and manage your CV versions</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl border border-white/10 p-8 space-y-8">
                    {/* Personal Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.name}
                                    onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Title</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.title}
                                    onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.personalInfo.email}
                                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    value={formData.personalInfo.phone}
                                    onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">GitHub</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.github}
                                    onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">LinkedIn</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.linkedin}
                                    onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Professional Summary */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Professional Summary</h2>
                        <textarea
                            value={formData.summary}
                            onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-32"
                            placeholder="Brief overview of your expertise..."
                            required
                        />
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Technical Skills</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Frontend Development</label>
                                <input
                                    type="text"
                                    value={formData.skills.frontend}
                                    onChange={(e) => handleSkillsChange('frontend', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="React, React Native, JavaScript, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">State Management</label>
                                <input
                                    type="text"
                                    value={formData.skills.stateManagement}
                                    onChange={(e) => handleSkillsChange('stateManagement', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="Redux, Context API, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Styling & UI</label>
                                <input
                                    type="text"
                                    value={formData.skills.styling}
                                    onChange={(e) => handleSkillsChange('styling', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="Tailwind CSS, Styled Components, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Backend & APIs</label>
                                <input
                                    type="text"
                                    value={formData.skills.backend}
                                    onChange={(e) => handleSkillsChange('backend', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="REST APIs, Firebase, Node.js, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Tools & Workflow</label>
                                <input
                                    type="text"
                                    value={formData.skills.tools}
                                    onChange={(e) => handleSkillsChange('tools', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="Git, GitHub, VS Code, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Other</label>
                                <input
                                    type="text"
                                    value={formData.skills.other}
                                    onChange={(e) => handleSkillsChange('other', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="Performance Optimization, Testing, etc."
                                />
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-indigo-400">Professional Experience</h2>
                            <button
                                type="button"
                                onClick={addExperience}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold"
                            >
                                + Add Experience
                            </button>
                        </div>
                        {formData.experience.map((exp, index) => (
                            <div key={index} className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold">Experience {index + 1}</h3>
                                    {formData.experience.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeExperience(index)}
                                            className="text-red-500 hover:text-red-400 text-sm"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Job Title</label>
                                        <input
                                            type="text"
                                            value={exp.title}
                                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Company</label>
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2">Duration</label>
                                        <input
                                            type="text"
                                            value={exp.duration}
                                            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                            placeholder="e.g., 2020 - 2022"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2">Responsibilities (one per line)</label>
                                        <textarea
                                            value={exp.responsibilities}
                                            onChange={(e) => handleExperienceChange(index, 'responsibilities', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-24"
                                            placeholder="List your key responsibilities..."
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Projects */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-indigo-400">Key Projects</h2>
                            <button
                                type="button"
                                onClick={addProject}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold"
                            >
                                + Add Project
                            </button>
                        </div>
                        {formData.projects.map((project, index) => (
                            <div key={index} className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold">Project {index + 1}</h3>
                                    {formData.projects.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeProject(index)}
                                            className="text-red-500 hover:text-red-400 text-sm"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Project Name</label>
                                        <input
                                            type="text"
                                            value={project.name}
                                            onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Description</label>
                                        <textarea
                                            value={project.description}
                                            onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Technologies (comma separated)</label>
                                        <input
                                            type="text"
                                            value={project.tech}
                                            onChange={(e) => handleProjectChange(index, 'tech', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                            placeholder="React, Node.js, MongoDB"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Result/Impact</label>
                                        <input
                                            type="text"
                                            value={project.result}
                                            onChange={(e) => handleProjectChange(index, 'result', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                            placeholder="Result: Improved performance by 40%"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Degree</label>
                                <input
                                    type="text"
                                    value={formData.education.degree}
                                    onChange={(e) => handleEducationChange('degree', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="Bachelor of Science in Computer Science"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">University</label>
                                <input
                                    type="text"
                                    value={formData.education.university}
                                    onChange={(e) => handleEducationChange('university', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">Duration</label>
                                <input
                                    type="text"
                                    value={formData.education.duration}
                                    onChange={(e) => handleEducationChange('duration', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none"
                                    placeholder="2016 - 2020"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Certifications & Training</h2>
                        <textarea
                            value={formData.certifications}
                            onChange={(e) => setFormData(prev => ({ ...prev, certifications: e.target.value }))}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-24"
                            placeholder="List your certifications (one per line)..."
                        />
                    </section>

                    {/* Languages */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Languages</h2>
                        <textarea
                            value={formData.languages}
                            onChange={(e) => setFormData(prev => ({ ...prev, languages: e.target.value }))}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-20"
                            placeholder="English - Professional, Bengali - Native"
                        />
                    </section>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all"
                        >
                            Save CV
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/admin')}
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold border border-white/10 transition-all"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminCVForm;
