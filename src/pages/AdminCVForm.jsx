import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCloudUploadAlt } from 'react-icons/fa';
import { uploadCv, resetUploadStatus } from '../features/cv/cvSlice';

const AdminCVForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { uploadLoading, uploadError, uploadSuccess } = useSelector((state) => state.cv);

    // Legacy State Structure
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

    // New State for Backend Requirements
    const [pdfFile, setPdfFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [version, setVersion] = useState('');

    useEffect(() => {
        if (uploadSuccess) {
            const timer = setTimeout(() => {
                dispatch(resetUploadStatus());
                // navigate('/cv'); // Optional: Redirect
                // Reset form handled if needed, or keep for editing
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [uploadSuccess, dispatch, navigate]);

    // --- Legacy Handlers ---
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

    // --- New PDF Handler ---
    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    // --- Submit Handler (Connected to Redux) ---
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!pdfFile) {
            alert('Please select a PDF file (Required by Backend)');
            return;
        }
        if (!version) {
            alert('Please enter a version number (Required by Backend)');
            return;
        }

        // Construct Data payload
        const data = new FormData();

        // Backend Required Fields
        data.append('title', formData.personalInfo.title);
        data.append('version', version);
        data.append('cv', pdfFile); // Fixed field name to match backend 'cv'
        if (imageFile) {
            data.append('image', imageFile); // Assuming backend expects 'image'
        }

        // Send all fields individually as expected by new backend controller
        data.append('personalInfo', JSON.stringify(formData.personalInfo));
        data.append('summary', formData.summary);
        data.append('skills', JSON.stringify(formData.skills));
        data.append('experience', JSON.stringify(formData.experience));
        data.append('projects', JSON.stringify(formData.projects));
        data.append('education', JSON.stringify(formData.education));
        data.append('certifications', formData.certifications);
        data.append('languages', formData.languages);

        dispatch(uploadCv(data));
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-black mb-2 text-white">Manage CVs</h1>
                        <p className="text-gray-400">Create new version & upload PDF to backend</p>
                    </div>
                    <button
                        onClick={() => navigate('/cv')}
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all flex items-center gap-2"
                    >
                        <FaArrowLeft /> Back to CV
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl border border-white/10 p-8 space-y-8">

                    {/* Status Messages for Backend Connection */}
                    {uploadLoading && (
                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                            Uploading to Server...
                        </div>
                    )}
                    {uploadError && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl">
                            Error: {typeof uploadError === 'object' ? JSON.stringify(uploadError) : uploadError}
                        </div>
                    )}
                    {uploadSuccess && (
                        <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl">
                            CV Uploaded Successfully!
                        </div>
                    )}

                    {/* --- BACKEND REQUIRED FIELDS SECTION --- */}
                    <div className="p-6 bg-indigo-900/20 border border-indigo-500/30 rounded-xl mb-8">
                        <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
                            <FaCloudUploadAlt /> Backend Requirements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">Version Number</label>
                                <input
                                    type="text"
                                    value={version}
                                    onChange={(e) => setVersion(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none text-white"
                                    placeholder="e.g. 1.2.0"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">PDF File</label>
                                <div className="bg-black/20 border border-white/10 rounded-xl px-4 py-2">
                                    <input
                                        type="file"
                                        accept="application/pdf"
                                        onChange={handleFileChange}
                                        className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">Profile Image</label>
                                <div className="bg-black/20 border border-white/10 rounded-xl px-4 py-2">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* --- LEGACY FORM FIELDS --- */}

                    {/* Personal Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.name}
                                    onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Title</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.title}
                                    onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                                <input
                                    type="email"
                                    value={formData.personalInfo.email}
                                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Phone</label>
                                <input
                                    type="tel"
                                    value={formData.personalInfo.phone}
                                    onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">GitHub</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.github}
                                    onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">LinkedIn</label>
                                <input
                                    type="text"
                                    value={formData.personalInfo.linkedin}
                                    onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
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
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-32 text-white"
                            placeholder="Brief overview of your expertise..."
                            required
                        />
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Technical Skills</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Frontend Development</label>
                                <input
                                    type="text"
                                    value={formData.skills.frontend}
                                    onChange={(e) => handleSkillsChange('frontend', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    placeholder="React, React Native, JavaScript, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">State Management</label>
                                <input
                                    type="text"
                                    value={formData.skills.stateManagement}
                                    onChange={(e) => handleSkillsChange('stateManagement', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    placeholder="Redux, Context API, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Styling & UI</label>
                                <input
                                    type="text"
                                    value={formData.skills.styling}
                                    onChange={(e) => handleSkillsChange('styling', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    placeholder="Tailwind CSS, Styled Components, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Backend & APIs</label>
                                <input
                                    type="text"
                                    value={formData.skills.backend}
                                    onChange={(e) => handleSkillsChange('backend', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    placeholder="REST APIs, Firebase, Node.js, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Tools & Workflow</label>
                                <input
                                    type="text"
                                    value={formData.skills.tools}
                                    onChange={(e) => handleSkillsChange('tools', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    placeholder="Git, GitHub, VS Code, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Other</label>
                                <input
                                    type="text"
                                    value={formData.skills.other}
                                    onChange={(e) => handleSkillsChange('other', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
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
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold text-white"
                            >
                                + Add Experience
                            </button>
                        </div>
                        {formData.experience.map((exp, index) => (
                            <div key={index} className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-white">Experience {index + 1}</h3>
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
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Job Title</label>
                                        <input
                                            type="text"
                                            value={exp.title}
                                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Duration</label>
                                        <input
                                            type="text"
                                            value={exp.duration}
                                            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                            placeholder="e.g., 2020 - 2022"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Responsibilities (one per line)</label>
                                        <textarea
                                            value={exp.responsibilities}
                                            onChange={(e) => handleExperienceChange(index, 'responsibilities', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-24 text-white"
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
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold text-white"
                            >
                                + Add Project
                            </button>
                        </div>
                        {formData.projects.map((project, index) => (
                            <div key={index} className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-white">Project {index + 1}</h3>
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
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Project Name</label>
                                        <input
                                            type="text"
                                            value={project.name}
                                            onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Description</label>
                                        <textarea
                                            value={project.description}
                                            onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-20 text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Technologies (comma separated)</label>
                                        <input
                                            type="text"
                                            value={project.tech}
                                            onChange={(e) => handleProjectChange(index, 'tech', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                            placeholder="React, Node.js, MongoDB"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Result/Impact</label>
                                        <input
                                            type="text"
                                            value={project.result}
                                            onChange={(e) => handleProjectChange(index, 'result', e.target.value)}
                                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
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
                                <label className="block text-sm font-medium mb-2 text-gray-300">Degree</label>
                                <input
                                    type="text"
                                    value={formData.education.degree}
                                    onChange={(e) => handleEducationChange('degree', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                    placeholder="Bachelor of Science in Computer Science"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">University</label>
                                <input
                                    type="text"
                                    value={formData.education.university}
                                    onChange={(e) => handleEducationChange('university', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2 text-gray-300">Duration</label>
                                <input
                                    type="text"
                                    value={formData.education.duration}
                                    onChange={(e) => handleEducationChange('duration', e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none text-white"
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
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-24 text-white"
                            placeholder="List your certifications (one per line)..."
                        />
                    </section>

                    {/* Languages */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Languages</h2>
                        <textarea
                            value={formData.languages}
                            onChange={(e) => setFormData(prev => ({ ...prev, languages: e.target.value }))}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none h-20 text-white"
                            placeholder="English - Professional, Bengali - Native"
                        />
                    </section>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-6 border-t border-white/10">
                        <button
                            type="submit"
                            disabled={uploadLoading}
                            className={`px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all text-white flex items-center gap-2 ${uploadLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <FaCloudUploadAlt /> {uploadLoading ? 'Uploading...' : 'Save & Upload PDF'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminCVForm;
