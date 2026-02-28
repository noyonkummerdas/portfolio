import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTerminal, FaChevronLeft, FaTimes, FaMinus, FaLayerGroup } from 'react-icons/fa';

const DevTerminal = () => {
    const navigate = useNavigate();
    const [lines, setLines] = useState([
        { text: "$ initializing session...", type: "system" },
        { text: "$ fetching archived records...", type: "system" },
        { text: "[OK] remote repository linked.", type: "success" },
        { text: "[OK] node_modules resolved.", type: "success" },
        { text: "$ ready to compile.", type: "system" }
    ]);
    const [isCompiling, setIsCompiling] = useState(false);
    const containerRef = useRef(null);

    const triggerCompilation = () => {
        if (isCompiling) return;
        setIsCompiling(true);
        const newLines = [
            { text: "$ npm run build --optimized", type: "input" },
            { text: "> building project assets @ v1.2.0...", type: "system" },
            { text: "  - [1/4] minifying scripts...", type: "process" },
            { text: "  - [2/4] optimizing images...", type: "process" },
            { text: "  - [3/4] tree-shaking dead code...", type: "process" },
            { text: "  - [4/4] generating sitemap...", type: "process" },
            { text: "[COMPLETE] build artifact generated in 4.2s.", type: "success" },
            { text: "$ readiness check: 100%", type: "system" }
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (newLines[i]) {
                setLines(prev => [...prev, newLines[i]]);
            }
            i++;
            if (i >= newLines.length) {
                clearInterval(interval);
                setIsCompiling(false);
            }
        }, 600);
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="bg-[#f6f8fa] min-h-screen text-[#1f2328] font-inter pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/hello-developer')}
                    className="flex items-center gap-2 text-[#57606a] hover:text-[#0969da] transition-colors mb-6 font-mono text-sm"
                >
                    <FaChevronLeft /> back_to_profile
                </button>

                <div className="bg-[#1f2428] rounded-xl shadow-2xl overflow-hidden border border-[#24292e]">
                    {/* Header Bar */}
                    <div className="bg-[#24292e] p-3 flex justify-between items-center border-b border-[#0b0e14]">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-[10px] font-mono text-gray-400 opacity-60">
                            bash — 120×43 — noyon@localhost
                        </div>
                        <div className="flex gap-4 text-gray-400 text-xs">
                            <FaTerminal />
                            <FaLayerGroup />
                        </div>
                    </div>

                    {/* Console View */}
                    <div
                        ref={containerRef}
                        className="p-8 h-[500px] overflow-y-auto font-mono text-xs sm:text-sm text-green-400 leading-relaxed scrollbar-hide"
                    >
                        <AnimatePresence mode="popLayout">
                            {lines.map((line, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    className={`mb-1 ${line.type === "success" ? "text-cyan-400" :
                                        line.type === "input" ? "text-white font-bold" :
                                            line.type === "process" ? "text-gray-400" : "text-green-400"
                                        }`}
                                >
                                    {line.text}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {isCompiling && (
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-2 h-4 bg-green-500 animate-pulse"></div>
                                <span className="text-gray-500 italic">kernel processing...</span>
                            </div>
                        )}
                    </div>

                    {/* Footer / Controls */}
                    <div className="bg-[#24292e] p-6 border-t border-[#0b0e14]">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-xs text-gray-400 font-mono">
                                current_path: <span className="text-blue-400">~/profile/build-process</span>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setLines([{ text: "$ cleaning workspace...", type: "system" }])}
                                    className="px-4 py-2 border border-gray-600 text-gray-400 text-xs rounded hover:bg-gray-700 transition"
                                >
                                    clear_logs
                                </button>
                                <button
                                    onClick={triggerCompilation}
                                    disabled={isCompiling}
                                    className={`px-6 py-2 bg-[#0969da] text-white font-bold text-xs rounded-md shadow-lg transition shadow-blue-500/20 active:scale-95 ${isCompiling ? 'opacity-50 grayscale' : 'hover:bg-blue-600'}`}
                                >
                                    {isCompiling ? "RUNNING_BUILD..." : "RE_BUILD_PROJECT"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {[
                        { label: "Memory Usage", value: "240MB / 1.2GB", color: "blue" },
                        { label: "Build Success Rate", value: "99.2%", color: "green" },
                        { label: "Last Optimized", value: "3 mins ago", color: "purple" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-5 border border-[#d0d7de] rounded-xl shadow-sm">
                            <div className="text-[10px] text-[#57606a] font-bold uppercase tracking-widest">{stat.label}</div>
                            <div className="text-xl font-bold mt-1 text-[#1f2328]">{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DevTerminal;
