import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaEnvelope, FaChevronLeft, FaShareAlt, FaProjectDiagram, FaGlobeAmericas, FaLaptopCode } from 'react-icons/fa';
import { SiGithub, SiMedium, SiLinkedin } from 'react-icons/si';

const DevSocial = () => {
    const navigate = useNavigate();

    const collaborativeStack = [
        { name: "Dev_Alice", role: "Frontend Architect", location: "Berlin, DE", avatar: "A" },
        { name: "Code_Bob", role: "Backend Senior", location: "Toronto, CA", avatar: "B" },
        { name: "Tech_Charlie", role: "Cloud DevOps", location: "Bangalore, IN", avatar: "C" },
        { name: "Logic_Diana", role: "UI/UX Researcher", location: "Austin, TX", avatar: "D" }
    ];

    return (
        <div className="bg-[#f6f8fa] min-h-screen text-[#1f2328] font-inter pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/hello-developer')}
                    className="flex items-center gap-2 text-[#57606a] hover:text-[#0969da] transition-colors mb-6 font-mono text-sm"
                >
                    <FaChevronLeft /> back_to_profile
                </button>

                {/* Main Identity Box */}
                <div className="bg-white border border-[#d0d7de] rounded-2xl shadow-sm p-8 flex flex-col items-center mb-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                    <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mb-4 shadow-inner">
                        <FaLaptopCode />
                    </div>
                    <h1 className="text-3xl font-extrabold text-[#1f2328]">Developer Network Access</h1>
                    <p className="max-w-md text-[#57606a] mt-3 leading-relaxed">
                        Connect with the source. Fork my professional DNA or open a direct socket for collaboration.
                    </p>

                    <div className="flex gap-4 mt-8 w-full max-w-sm">
                        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#0969da] hover:bg-[#0860ca] text-white font-bold rounded-xl transition-all shadow-lg active:scale-95 shadow-blue-500/20">
                            <FaUserPlus /> follow_node
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#1a7f37] hover:bg-[#1a7f37]/90 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95 shadow-green-500/20">
                            <FaEnvelope /> open_socket
                        </button>
                    </div>
                </div>

                {/* Collaboration Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Active Collaborators */}
                    <div className="bg-white border border-[#d0d7de] rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                            <FaProjectDiagram className="text-[#0969da]" /> Current Connection Graph
                        </h2>
                        <div className="space-y-4">
                            {collaborativeStack.map((dev, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border border-[#f0f2f5] rounded-xl hover:bg-[#f6f8fa] transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center font-bold text-gray-400 group-hover:text-blue-500 transition-colors">
                                            {dev.avatar}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold">{dev.name}</div>
                                            <div className="text-[10px] text-[#57606a] italic">{dev.role}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#1a7f37]">
                                        <FaGlobeAmericas /> {dev.location}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 text-sm font-bold text-[#0969da] hover:underline mt-4">
                            view_entire_network()
                        </button>
                    </div>

                    {/* Social Repositories */}
                    <div className="space-y-8">
                        <div className="bg-white border border-[#d0d7de] rounded-2xl p-6 shadow-sm">
                            <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                                <FaShareAlt className="text-[#0969da]" /> Public Repositories
                            </h2>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { icon: <SiGithub />, name: "GitHub", count: "142", color: "black" },
                                    { icon: <SiLinkedin />, name: "LinkedIn", count: "1.2k", color: "blue" },
                                    { icon: <SiMedium />, name: "Articles", count: "24", color: "black" }
                                ].map((soc, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center p-4 border border-[#f0f2f5] rounded-xl hover:shadow-md transition-all cursor-pointer">
                                        <div className="text-2xl mb-2 text-gray-700">{soc.icon}</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400">{soc.name}</div>
                                        <div className="text-xs font-bold text-[#1f2328] mt-1">{soc.count}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Direct API Request */}
                        <div className="bg-[#24292e] p-6 rounded-2xl shadow-xl border border-[#0b0e14]">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <span className="text-blue-400">$</span> fetch_api_invite
                            </h3>
                            <div className="p-4 bg-[#1f2428] rounded-lg font-mono text-[10px] text-gray-400 leading-relaxed border border-gray-700/50">
                                <span className="text-purple-400">POST</span> /collaborate/join <br />
                                <span className="text-[#1a7f37]">"Content-Type"</span>: <span className="text-yellow-600">"application/json"</span>,<br />
                                <span className="text-[#1a7f37]">"Role"</span>: <span className="text-yellow-600">"Partner"</span>
                            </div>
                            <button className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-md transition-all transform hover:scale-[1.02]">
                                Request Collaboration Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevSocial;
