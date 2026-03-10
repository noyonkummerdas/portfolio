import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { login } from '../features/auth/authSlice';
import {
    FaLock,
    FaUser,
    FaArrowRight,
    FaSpinner,
    FaFingerprint,
    FaShieldAlt,
    FaEye,
    FaEyeSlash,
    FaTerminal,
    FaTimes,
    FaUserCircle
} from 'react-icons/fa';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, token } = useSelector((state) => state.auth);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [showPass, setShowPass] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

    const planets = [
        { name: 'Mercury', size: 'w-4 h-4', texture: 'bg-gradient-to-br from-gray-400 to-gray-600', glow: 'shadow-gray-500/30', radius: 180, speed: 20, delay: 0 },
        { name: 'Venus', size: 'w-8 h-8', texture: 'bg-gradient-to-br from-orange-200 to-orange-500', glow: 'shadow-orange-400/30', radius: 260, speed: 25, delay: 5 },
        { name: 'Earth', size: 'w-10 h-10', texture: 'bg-[radial-gradient(circle_at_30%_30%,#3b82f6,#1d4ed8_70%,#065f46_90%)]', glow: 'shadow-blue-500/40', radius: 360, speed: 35, delay: 10 },
        { name: 'Mars', size: 'w-7 h-7', texture: 'bg-gradient-to-br from-red-400 to-red-800', glow: 'shadow-red-600/30', radius: 460, speed: 40, delay: 15 },
        { name: 'Jupiter', size: 'w-24 h-24', texture: 'bg-[repeating-linear-gradient(0deg,#d97706,#b45309_10px,#92400e_20px)]', glow: 'shadow-orange-700/20', radius: 600, speed: 60, delay: 20 },
        { name: 'Saturn', size: 'w-20 h-20', texture: 'bg-gradient-to-br from-yellow-100 to-yellow-500', glow: 'shadow-yellow-400/20', radius: 750, speed: 75, delay: 25, hasRings: true },
        { name: 'Uranus', size: 'w-16 h-16', texture: 'bg-gradient-to-br from-cyan-200 to-cyan-500', glow: 'shadow-cyan-400/30', radius: 900, speed: 90, delay: 30 },
        { name: 'Neptune', size: 'w-14 h-14', texture: 'bg-gradient-to-br from-blue-400 to-blue-800', glow: 'shadow-blue-600/30', radius: 1050, speed: 105, delay: 35 },
        { name: 'Pluto', size: 'w-4 h-4', texture: 'bg-gradient-to-br from-slate-400 to-slate-600', glow: 'shadow-slate-500/20', radius: 1200, speed: 130, delay: 40 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlanetIndex((prev) => (prev + 1) % planets.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [planets.length]);

    useEffect(() => {
        if (token) {
            const timeout = setTimeout(() => {
                navigate('/admin');
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [token, navigate]);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(credentials));
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9, x: -50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const inputVariants = {
        focus: { scale: 1.02, borderColor: "rgba(99, 102, 241, 0.5)" },
        blur: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)" }
    };



    return (
        <div className="min-h-screen relative flex items-center justify-center lg:justify-start bg-[#05070a] px-6 lg:pl-32 font-inter overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url('/login_bg.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070a]/50 to-[#05070a]" />

                {/* Central Glow (Sun) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600/10 blur-[100px] rounded-full" />

                {/* 9 Animated Planets with Vertical Orbital System */}
                <div
                    className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                    style={{ perspective: "2000px" }}
                >
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{
                            transform: "rotateY(-70deg)", // Side-view tilt
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {planets.map((planet, idx) => (
                            <React.Fragment key={idx}>
                                {/* Vertical Orbital Path Line */}
                                <div
                                    className="absolute border border-white/5 rounded-full z-0"
                                    style={{
                                        width: planet.radius * 2.5,
                                        height: planet.radius * 2.5,
                                    }}
                                />

                                {/* Rotating Orbit Container */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: planet.speed,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: -planet.delay
                                    }}
                                    className="absolute z-0 flex items-center justify-center"
                                    style={{
                                        width: planet.radius * 2.5,
                                        height: planet.radius * 2.5,
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    {/* Planet Body positioned at the edge */}
                                    <div
                                        className="absolute right-0"
                                        style={{ transform: "translateX(50%)" }}
                                    >
                                        <div
                                            className="relative"
                                            style={{
                                                transform: "rotateY(70deg)", // Counter-tilt
                                                transformStyle: "preserve-3d"
                                            }}
                                        >
                                            {/* Sequential Name Popup over the active planet */}
                                            <AnimatePresence>
                                                {currentPlanetIndex === idx && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                                        animate={{ opacity: 1, y: -60, scale: 1.2 }}
                                                        exit={{ opacity: 0, y: -40, scale: 0.5 }}
                                                        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-[100] pointer-events-none"
                                                    >
                                                        <div className="bg-indigo-700/90 backdrop-blur-md px-5 py-2 rounded-2xl border-2 border-white/40 shadow-[0_0_30px_rgba(79,70,229,0.8)] flex flex-col items-center gap-1 group">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                                                                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{planet.name}</span>
                                                            </div>
                                                            <div className="text-[8px] font-bold text-indigo-200 tracking-[0.1em] opacity-80 uppercase">Detected</div>
                                                        </div>
                                                        {/* Connecting line/arrow */}
                                                        <div className="w-[2px] h-8 bg-gradient-to-t from-transparent via-white/50 to-white mx-auto shadow-[0_0_10px_white]" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Saturn's Rings */}
                                            {planet.hasRings && (
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240%] h-[40%] border-[4px] border-yellow-200/20 rounded-[100%] rotate-[15deg] shadow-[0_0_15px_rgba(253,224,71,0.1)]" />
                                            )}

                                            {/* Planet Body */}
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                    rotate: [0, -360],
                                                }}
                                                transition={{
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                className={`${planet.size} ${planet.texture} rounded-full shadow-[0_0_20px] ${planet.glow} relative z-10`}
                                            >
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/60 to-transparent shadow-inner" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-[440px]"
            >
                {/* Header Section */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Secure Authentication System</span>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="relative mx-auto w-24 h-24 mb-6 group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="absolute inset-0 bg-indigo-600/30 blur-2xl group-hover:bg-indigo-600/50 transition-all duration-500 rounded-full" />
                        <div className="relative w-full h-full bg-gradient-to-br from-indigo-600/80 to-blue-600/80 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <FaShieldAlt className={`text-4xl text-white transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`} />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl font-black text-white tracking-tight mb-2"
                    >
                        Welcome <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Back</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-sm font-medium"
                    >
                        Enter your credentials to access the console
                    </motion.p>
                </div>

                <AnimatePresence mode='wait'>
                    {token ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 backdrop-blur-2xl border border-indigo-500/30 rounded-[32px] p-12 text-center"
                        >
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    <FaFingerprint className="text-3xl text-green-400" />
                                </motion.div>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Access Granted</h2>
                            <p className="text-gray-400 text-sm mb-6">Redirecting to core system...</p>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5 }}
                                    className="h-full bg-indigo-500"
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="login-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-xl flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    </div>
                                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider">{error}</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-indigo-400/80 uppercase tracking-[0.2em] ml-1">Identity</label>
                                    <div className="relative group/field">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-focus-within/field:bg-indigo-500/20 transition-all duration-300">
                                            <FaUser className="text-gray-500 group-focus-within/field:text-indigo-400 text-xs transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            name="username"
                                            required
                                            value={credentials.username}
                                            onChange={handleChange}
                                            placeholder="Admin Identifier"
                                            className="w-full pl-14 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-mono"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-indigo-400/80 uppercase tracking-[0.2em] ml-1">Security Key</label>
                                    <div className="relative group/field">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-focus-within/field:bg-indigo-500/20 transition-all duration-300">
                                            <FaLock className="text-gray-500 group-focus-within/field:text-indigo-400 text-xs transition-colors" />
                                        </div>
                                        <input
                                            type={showPass ? "text" : "password"}
                                            name="password"
                                            required
                                            value={credentials.password}
                                            onChange={handleChange}
                                            placeholder="••••••••••••"
                                            className="w-full pl-14 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-mono"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPass(!showPass)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-2"
                                        >
                                            {showPass ? <FaEyeSlash className="text-indigo-400" /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between px-1">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative w-4 h-4 rounded-md border border-white/20 bg-white/5 group-hover:border-indigo-500/50 transition-all overflow-hidden flex items-center justify-center">
                                            <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                                            <div className="w-2 h-2 rounded-sm bg-indigo-500 scale-0 peer-checked:scale-100 transition-transform duration-300" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300">Trust System</span>
                                    </label>
                                    <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/80 hover:text-indigo-400 transition-colors">
                                        Lost Protocol?
                                    </button>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl font-black text-xs text-white uppercase tracking-[0.3em] shadow-[0_8px_32px_-8px_rgba(79,70,229,0.5)] hover:shadow-indigo-500/50 transition-all border border-white/10 overflow-hidden"
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        {loading ? (
                                            <FaSpinner className="animate-spin text-lg" />
                                        ) : (
                                            <>
                                                Initialize Access <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </div>
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-12 text-center"
                >
                    <div className="flex items-center justify-center gap-6 mb-6">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/10" />
                        <FaTerminal className="text-gray-700 text-xs" />
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/10" />
                    </div>
                    <p className="text-[9px] text-gray-600 uppercase tracking-[0.6em] font-black leading-loose">
                        NK NOYON OS v4.0.2 <br />
                        <span className="text-indigo-500/30">QUANTUM ENCRYPTION ACTIVE</span>
                    </p>
                </motion.div>
            </motion.div>



            {/* Custom Mouse Glow */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                }

                .font-mono {
                    font-family: 'JetBrains Mono', 'Fira Code', monospace;
                }

                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus {
                    -webkit-text-fill-color: white;
                    -webkit-box-shadow: 0 0 0px 1000px #111827 inset;
                    transition: background-color 5000s ease-in-out 0s;
                }
            `}} />
        </div>
    );
};

export default Login;
