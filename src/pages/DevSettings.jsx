import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTerminal, FaSave, FaUndo, FaLock, FaGlobe, FaChevronLeft } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs } from 'react-icons/si';

const DevSettings = () => {
    const navigate = useNavigate();

    const configLines = [
        { key: "username", value: "\"nk_noyon\"", comment: "// global identifier" },
        { key: "env_mode", value: "\"production\"", comment: "// current deployment state" },
        { key: "tech_stack", value: "[\"React\", \"Node\", \"PostgreSQL\"]", comment: "// core dependencies" },
        { key: "scaling", value: "true", comment: "// enables auto-scaling on load" },
        { key: "auth_provider", value: "\"JWT_RSA_256\"", comment: "// secure handshake protocol" },
        { key: "latency_optimization", value: "0.002ms", comment: "// targeted response time" }
    ];

    return (
        <div className="bg-[#f6f8fa] min-h-screen text-[#1f2328] font-inter pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumbs */}
                <button
                    onClick={() => navigate('/hello-developer')}
                    className="flex items-center gap-2 text-[#57606a] hover:text-[#0969da] transition-colors mb-6 font-mono text-sm"
                >
                    <FaChevronLeft /> back_to_profile
                </button>

                <div className="bg-white border border-[#d0d7de] rounded-xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#f6f8fa] border-b border-[#d0d7de] p-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-xl font-bold flex items-center gap-2">
                                    <FaTerminal className="text-[#0969da]" /> Professional Repository Settings
                                </h1>
                                <p className="text-sm text-[#57606a] mt-1 font-mono">/etc/developer/noyon.config.json</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 bg-white border border-[#d0d7de] rounded-md hover:bg-gray-50 transition-all text-sm shadow-sm">
                                    <FaUndo className="text-gray-400" />
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#1a7f37] hover:bg-[#1a7f37]/90 text-white font-bold rounded-md text-sm transition-all shadow-sm">
                                    <FaSave /> commit_changes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Editor Mirror */}
                    <div className="p-0">
                        <div className="bg-[#ffffff] flex border-b border-[#d0d7de]">
                            <div className="w-12 bg-[#f6f8fa] border-r border-[#d0d7de] flex flex-col items-center py-4 text-[#cfd3d7] font-mono text-xs select-none">
                                {[...Array(15)].map((_, i) => <div key={i}>{i + 1}</div>)}
                            </div>
                            <div className="flex-1 p-6 font-mono text-sm space-y-2 overflow-x-auto">
                                <div className="text-[#d73a49]">{"{"}</div>
                                {configLines.map((line, idx) => (
                                    <div key={idx} className="pl-6 group hover:bg-blue-50/50 transition-colors">
                                        <span className="text-[#005cc5]">"{line.key}"</span>:
                                        <span className="text-[#032f62] ml-2">{line.value}</span>,
                                        <span className="text-[#6a737d] ml-6 opacity-0 group-hover:opacity-100 transition-opacity italic">{line.comment}</span>
                                    </div>
                                ))}
                                <div className="text-[#d73a49]">{"}"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Permissions Section */}
                    <div className="p-8 space-y-8">
                        <div>
                            <h2 className="text-lg font-bold border-b border-[#d0d7de] pb-2 mb-6">Security & Access Protocols</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-4 border border-[#d0d7de] rounded-xl hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-red-50 text-red-600 rounded-lg"><FaLock /></div>
                                    <div>
                                        <h3 className="font-bold text-sm">Public Key Encryption</h3>
                                        <p className="text-xs text-[#57606a] mt-1">Manage RSA-4096 keys for secure API communication.</p>
                                        <button className="text-[#0969da] text-xs mt-2 hover:underline">configure keys</button>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 border border-[#d0d7de] rounded-xl hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FaGlobe /></div>
                                    <div>
                                        <h3 className="font-bold text-sm">CDN Edge Optimization</h3>
                                        <p className="text-xs text-[#57606a] mt-1">Configure global caching layers for sub-0.5s load times.</p>
                                        <button className="text-[#0969da] text-xs mt-2 hover:underline">purge_cache</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold border-b border-[#d0d7de] pb-2 mb-6">Automation Webhooks</h2>
                            <div className="space-y-4">
                                {[
                                    { name: "github_action_deploy", status: "Enabled", type: "CI/CD" },
                                    { name: "slack_error_notifier", status: "Active", type: "Monitoring" },
                                    { name: "docker_image_rebuild", status: "Queueing", type: "Containerization" }
                                ].map((hook, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <div>
                                                <div className="text-sm font-bold font-mono">{hook.name}</div>
                                                <div className="text-[10px] text-[#57606a]">{hook.type} - payload: application/json</div>
                                            </div>
                                        </div>
                                        <button className="text-xs text-[#57606a] hover:text-[#0969da] font-bold">Edit</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-xl">
                    <h3 className="text-red-700 font-bold mb-2">Danger Zone</h3>
                    <p className="text-sm text-red-600 mb-4">Deleting this professional repository will permanently wipe all optimized configurations.</p>
                    <button className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-md text-sm font-bold hover:bg-red-600 hover:text-white transition-all">
                        Archive Professional Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DevSettings;
