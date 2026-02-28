import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt, FaVideo, FaCode, FaRocket, FaInfoCircle, FaImage } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiGithub } from 'react-icons/si';

const PostProject = () => {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState({
        name: '',
        tagline: '',
        description: '',
        techStack: '',
        videoLink: '',
        repoLink: ''
    });

    const [isPosting, setIsPosting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPosting(true);
        // Simulate posting process
        setTimeout(() => {
            setIsPosting(false);
            alert("Project committed to repository successfully!");
            navigate('/hello-developer');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#f6f8fa] font-inter pb-20">
            {/* Header */}
            <div className="bg-white border-b border-[#d0d7de] sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#f6f8fa] rounded-lg">
                            <FaCloudUploadAlt className="text-[#0969da] text-xl" />
                        </div>
                        <h1 className="text-lg font-bold text-[#1f2328]">Post New Project</h1>
                    </div>
                    <button
                        onClick={() => navigate('/hello-developer')}
                        className="text-sm font-medium text-[#57606a] hover:text-[#0969da]"
                    >
                        Discard
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Form Section */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white border border-[#d0d7de] rounded-xl overflow-hidden shadow-sm">
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-[#1f2328] mb-2">Project Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Eco-Commerce Platform"
                                        className="w-full px-4 py-2.5 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg focus:ring-2 focus:ring-[#0969da]/20 focus:border-[#0969da] outline-none transition-all text-sm"
                                        value={projectData.name}
                                        onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#1f2328] mb-2">Short Tagline</label>
                                    <input
                                        type="text"
                                        placeholder="One-line power statement..."
                                        className="w-full px-4 py-2.5 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg focus:ring-2 focus:ring-[#0969da]/20 focus:border-[#0969da] outline-none transition-all text-sm"
                                        value={projectData.tagline}
                                        onChange={(e) => setProjectData({ ...projectData, tagline: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#1f2328] mb-2">Technical Description</label>
                                    <textarea
                                        rows="6"
                                        placeholder="Describe the architecture, challenges and solutions..."
                                        className="w-full px-4 py-2.5 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg focus:ring-2 focus:ring-[#0969da]/20 focus:border-[#0969da] outline-none transition-all text-sm resize-none"
                                        value={projectData.description}
                                        onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Media Section */}
                        <div className="bg-white border border-[#d0d7de] rounded-xl overflow-hidden shadow-sm">
                            <div className="p-6">
                                <h3 className="text-sm font-bold text-[#1f2328] mb-4 flex items-center gap-2">
                                    <FaVideo className="text-[#57606a]" /> Media & Assets
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-[#57606a] uppercase tracking-wider mb-2">Project Video Link (YouTube/Vimeo)</label>
                                        <input
                                            type="url"
                                            placeholder="https://youtube.com/watch?v=..."
                                            className="w-full px-4 py-2.5 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg focus:ring-2 focus:ring-[#0969da]/20 focus:border-[#0969da] outline-none transition-all text-sm"
                                            value={projectData.videoLink}
                                            onChange={(e) => setProjectData({ ...projectData, videoLink: e.target.value })}
                                        />
                                    </div>
                                    <div className="p-8 border-2 border-dashed border-[#d0d7de] rounded-xl flex flex-col items-center justify-center bg-[#f6f8fa] hover:border-[#0969da] transition-colors cursor-pointer group">
                                        <FaImage className="text-3xl text-[#57606a] mb-2 group-hover:text-[#0969da]" />
                                        <p className="text-sm font-medium text-[#1f2328]">Upload Images</p>
                                        <p className="text-xs text-[#57606a]">Drop screenshots or click to browse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Metadata Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white border border-[#d0d7de] rounded-xl p-6 shadow-sm">
                            <h3 className="text-sm font-bold text-[#1f2328] mb-4 flex items-center gap-2">
                                <FaCode className="text-[#57606a]" /> Tech Stack Details
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-[#57606a] uppercase tracking-wider mb-2">Primary Repo (URL)</label>
                                    <div className="relative">
                                        <SiGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-[#57606a]" />
                                        <input
                                            type="url"
                                            placeholder="github.com/noyon/..."
                                            className="w-full pl-10 pr-4 py-2 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg text-xs outline-none"
                                            value={projectData.repoLink}
                                            onChange={(e) => setProjectData({ ...projectData, repoLink: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-[#57606a] uppercase tracking-wider mb-2">Technologies (Comma separated)</label>
                                    <input
                                        type="text"
                                        placeholder="React, Next.js, FastAPI..."
                                        className="w-full px-4 py-2 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg text-xs outline-none"
                                        value={projectData.techStack}
                                        onChange={(e) => setProjectData({ ...projectData, techStack: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                <button
                                    type="submit"
                                    disabled={isPosting}
                                    className={`w-full py-3 bg-[#1a7f37] hover:bg-[#1a7f37]/90 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 ${isPosting ? 'opacity-70' : 'active:scale-95'}`}
                                >
                                    <FaRocket /> {isPosting ? 'Committing Build...' : 'Deploy Project Post'}
                                </button>
                                <p className="text-[10px] text-center text-[#57606a] px-2 italic">
                                    This will trigger a new deployment in your main repository and update the live feed.
                                </p>
                            </div>
                        </div>

                        {/* Tips Card */}
                        <div className="bg-[#fff8eb] border border-[#f8e3a1] rounded-xl p-5">
                            <h4 className="flex items-center gap-2 text-xs font-bold text-[#9a6700] mb-2 uppercase tracking-tight">
                                <FaInfoCircle /> Deployment Tip
                            </h4>
                            <p className="text-xs text-[#735c0f] leading-relaxed">
                                High fidelity projects with clear technical descriptions and repository links get 4x more engagement from potential recruiters.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostProject;
