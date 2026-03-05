import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { login } from '../features/auth/authSlice';
import { FaLock, FaUser, FaArrowRight, FaSpinner, FaFingerprint, FaShieldAlt } from 'react-icons/fa';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, token } = useSelector((state) => state.auth);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
        if (token) {
            navigate('/admin');
        }
    }, [token, navigate]);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(credentials));
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#0d1117] px-6 font-inter overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-md"
            >
                {/* Brand Logo/Icon Area */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        className="w-20 h-20 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-indigo-500/30 mb-6 border border-white/10"
                    >
                        <FaShieldAlt className="text-white text-3xl" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-black text-white tracking-tighter uppercase mb-2"
                    >
                        Secure <span className="text-indigo-500 text-shadow-glow">Access</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-sm font-medium tracking-wide"
                    >
                        PORTFOLIO CONTROL TERMINAL v2.0
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] shadow-2xl p-8 relative overflow-hidden group"
                >
                    {/* Inner highlight */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <AnimatePresence mode="wait">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs font-bold flex items-center gap-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] px-1">Admin Identity</label>
                            <div className="relative group/field">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/field:text-indigo-400 transition-colors" />
                                <input
                                    type="text"
                                    name="username"
                                    required
                                    value={credentials.username}
                                    onChange={handleChange}
                                    placeholder="Enter Admin ID"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all font-mono"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] px-1">Security Token</label>
                            <div className="relative group/field">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/field:text-indigo-400 transition-colors" />
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    required
                                    value={credentials.password}
                                    onChange={handleChange}
                                    placeholder="Enter pass-key"
                                    className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all font-mono"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    <FaFingerprint className={showPass ? "text-indigo-400" : ""} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            <label className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors">
                                <input type="checkbox" className="accent-indigo-500 w-3 h-3 rounded" />
                                Remember
                            </label>
                            <span className="cursor-pointer hover:text-indigo-400 transition-colors underline decoration-indigo-500/30">Reset Token?</span>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-full py-4 group overflow-hidden rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 group-hover:from-indigo-500 group-hover:to-blue-400 transition-all" />
                            <div className="relative flex items-center justify-center gap-3 text-white">
                                {loading ? (
                                    <FaSpinner className="animate-spin text-lg" />
                                ) : (
                                    <>
                                        Grant Access <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </div>
                        </motion.button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 text-center"
                >
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black leading-loose">
                        NK NOYON DEPLOYMENT SYSTEM <br />
                        <span className="text-gray-700">© 2026 ENCRYPTED TRANSACTION</span>
                    </p>
                </motion.div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .text-shadow-glow {
                    text-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
                }
            `}} />
        </div>
    );
};

export default Login;
