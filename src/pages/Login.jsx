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
        { name: 'Mercury', size: 'w-4 h-4', texture: 'bg-gradient-to-br from-gray-400 to-gray-600', glow: 'shadow-gray-500/30', radius: 250, speed: 1000, delay: 0 },
        { name: 'Venus', size: 'w-8 h-8', texture: 'bg-gradient-to-br from-orange-200 to-orange-500', glow: 'shadow-orange-400/30', radius: 380, speed: 1400, delay: 50 },
        { name: 'Earth', size: 'w-10 h-10', texture: 'bg-[radial-gradient(circle_at_30%_30%,#3b82f6,#1d4ed8_70%,#065f46_90%)]', glow: 'shadow-blue-500/40', radius: 520, speed: 1800, delay: 100 },
        { name: 'Mars', size: 'w-7 h-7', texture: 'bg-gradient-to-br from-red-400 to-red-800', glow: 'shadow-red-600/30', radius: 680, speed: 2200, delay: 150 },
        { name: 'Jupiter', size: 'w-24 h-24', texture: 'bg-[repeating-linear-gradient(0deg,#d97706,#b45309_10px,#92400e_20px)]', glow: 'shadow-orange-700/20', radius: 900, speed: 3500, delay: 200 },
        { name: 'Saturn', size: 'w-20 h-20', texture: 'bg-gradient-to-br from-yellow-100 to-yellow-500', glow: 'shadow-yellow-400/20', radius: 1150, speed: 5000, delay: 250, hasRings: true },
        { name: 'Uranus', size: 'w-16 h-16', texture: 'bg-gradient-to-br from-cyan-200 to-cyan-500', glow: 'shadow-cyan-400/30', radius: 1400, speed: 7000, delay: 300 },
        { name: 'Neptune', size: 'w-14 h-14', texture: 'bg-gradient-to-br from-blue-400 to-blue-800', glow: 'shadow-blue-600/30', radius: 1650, speed: 9000, delay: 350 },
        { name: 'Pluto', size: 'w-4 h-4', texture: 'bg-gradient-to-br from-slate-400 to-slate-600', glow: 'shadow-slate-500/20', radius: 1850, speed: 12000, delay: 400 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlanetIndex((prev) => (prev + 1) % planets.length);
        }, 15000); // 15 seconds per popup for an ultra-calm experience
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
        <div className="min-h-screen relative flex items-start justify-end bg-[#05070a] p-10 pt-[52px] pr-12 font-inter overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url('/login_bg.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/30" />

                {/* Hyper-Realistic Radiant Sun (Solar Engine) - Centered & Fixed Visibility */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-0 h-0">
                    {/* Primary Solar Radiation (Massive Light Wash) */}
                    <div className="absolute w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(253,186,11,0.2)_0%,rgba(249,115,22,0.1)_50%,transparent_80%)] -translate-x-1/2 -translate-y-1/2 blur-[140px]" />

                    {/* Outer Corona (Soft Fire Glow) */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.6, 0.4]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[700px] h-[700px] bg-gradient-to-r from-orange-600/40 via-red-600/20 to-transparent rounded-full blur-[110px] -translate-x-1/2 -translate-y-1/2"
                    />

                    {/* Solar Flares & Magnetic Loops (Dynamic Light Rays) */}
                    <div className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            className="w-[550px] h-[550px] border-[50px] border-orange-500/10 rounded-full blur-[50px] border-t-orange-500/30 border-l-yellow-500/20"
                        />
                    </div>

                    {/* The Sun Core (Intense Heat) */}
                    <div className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 100px rgba(249,115,22,0.6)",
                                    "0 0 150px rgba(234,88,12,0.9)",
                                    "0 0 100px rgba(249,115,22,0.6)"
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-96 h-96 bg-[radial-gradient(circle_at_center,#fff_0%,#fbbf24_20%,#f59e0b_40%,#ea580c_70%,#7c2d12_100%)] rounded-full shadow-[0_0_120px_rgba(251,191,36,0.7)] border-4 border-white/20"
                        >
                            {/* Surface Texture Simulation */}
                            <div className="absolute inset-0 rounded-full opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:10px_10px] mix-blend-overlay" />
                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5)_0%,transparent_60%)]" />
                        </motion.div>
                    </div>

                    {/* Lens Flare Spots (Realistic Camera Effect) */}
                    <div className="absolute left-[350px] top-[150px] w-6 h-6 bg-orange-500/20 rounded-full blur-sm" />
                    <div className="absolute -left-[450px] -bottom-[250px] w-4 h-4 bg-yellow-500/10 rounded-full blur-[3px]" />
                </div>

                {/* Centered Orbital System (Solar System Algorithm) */}
                <div
                    className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                    style={{ perspective: "2500px" }}
                >
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{
                            transform: "rotateY(-15deg) rotateX(5deg)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {planets.map((planet, idx) => (
                            <React.Fragment key={idx}>
                                {/* Wide Orbital Path Line centered on the Sun */}
                                <div
                                    className="absolute border border-white/10 rounded-full z-0"
                                    style={{
                                        width: planet.radius * 3.5,
                                        height: planet.radius * 3.5,
                                    }}
                                />

                                {/* Rotating Orbit Container centered on the Sun */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: planet.speed * 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: -planet.delay
                                    }}
                                    className="absolute z-0 flex items-center justify-center"
                                    style={{
                                        width: planet.radius * 3.5,
                                        height: planet.radius * 3.5,
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
                                                transform: "rotateY(15deg) rotateX(-5deg)", // Counter-tilt
                                                transformStyle: "preserve-3d"
                                            }}
                                        >
                                            {/* Advanced HUD Planetary Scanner Popup */}
                                            <AnimatePresence>
                                                {currentPlanetIndex === idx && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.4, y: 30 }}
                                                        animate={{ opacity: 1, scale: 1.1, y: -80 }}
                                                        exit={{ opacity: 0, scale: 0.4, y: -50 }}
                                                        className="absolute left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
                                                    >
                                                        <div className="relative group">
                                                            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-indigo-400 opacity-60" />
                                                            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-indigo-400 opacity-60" />
                                                            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-indigo-400 opacity-60" />
                                                            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-indigo-400 opacity-60" />

                                                            <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden min-w-[200px]">
                                                                <div className="relative z-10">
                                                                    <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em]">Scanner Unit-09</span>
                                                                            <h2 className="text-lg font-black text-white tracking-widest uppercase">{planet.name}</h2>
                                                                        </div>
                                                                        <div className={`w-8 h-8 rounded-lg ${planet.texture} ${planet.glow} shadow-inner bg-opacity-80`} />
                                                                    </div>
                                                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[7px] text-gray-400 uppercase font-bold tracking-widest">Atmosphere</span>
                                                                            <span className="text-[9px] font-mono text-indigo-300">STABLE-V3</span>
                                                                        </div>
                                                                        <div className="flex flex-col text-right">
                                                                            <span className="text-[7px] text-gray-400 uppercase font-bold tracking-widest">Surface Temp</span>
                                                                            <span className="text-[9px] font-mono text-indigo-300">482°K</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                                        <motion.div
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: "100%" }}
                                                                            transition={{ duration: 1.5, ease: "linear" }}
                                                                            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center">
                                                                <div className="w-[1px] h-10 bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent" />
                                                                <div className="w-2 h-2 rounded-full border border-indigo-400 animate-ping" />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Planet Rings (Saturn) */}
                                            {planet.hasRings && (
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260%] h-[40%] border-[4px] border-yellow-200/20 rounded-[100%] rotate-[20deg] shadow-[0_0_20px_rgba(253,224,71,0.2)]" />
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
                                                className={`${planet.size} ${planet.texture} rounded-full shadow-[0_0_25px] ${planet.glow} relative z-10`}
                                            >
                                                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,transparent_0%,rgba(0,0,0,0.6)_100%)] shadow-inner" />
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
                className="relative z-50"
            >
                <AnimatePresence mode='wait'>
                    {token ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 backdrop-blur-3xl border border-indigo-500/30 rounded-[32px] p-12 text-center"
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
                            className="bg-indigo-950/30 backdrop-blur-xl border border-indigo-500/30 rounded-[32px] p-2 pr-6 shadow-[0_0_50px_rgba(79,70,229,0.15)] relative group max-w-[950px] w-screen"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

                            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center gap-6">
                                {/* Error Message */}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute -top-16 right-0 p-3 bg-red-500/20 backdrop-blur-2xl border border-red-500/40 rounded-2xl flex items-center gap-3 z-50 min-w-[200px] justify-center shadow-xl"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">{error}</p>
                                    </motion.div>
                                )}

                                {/* Identity Field */}
                                <div className="flex-2 w-full lg:w-auto flex flex-col gap-1 p-2">
                                    <label className="text-[9px] font-black text-indigo-300 uppercase tracking-[0.3em] ml-4 opacity-70">Identity Protocol</label>
                                    <div className="relative group/field">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-focus-within/field:bg-indigo-500/20 transition-all duration-300">
                                            <FaUser className="text-indigo-400/50 group-focus-within/field:text-indigo-300 text-[10px] transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            name="username"
                                            required
                                            value={credentials.username}
                                            onChange={handleChange}
                                            placeholder="UNITS_ID"
                                            className="w-full pl-14 pr-4 py-4 bg-transparent border-b border-white/5 focus:border-indigo-400/50 text-sm text-indigo-50 placeholder-indigo-900/50 focus:outline-none transition-all font-mono tracking-widest"
                                        />
                                    </div>
                                </div>

                                {/* Security Key Field */}
                                <div className="flex-2 w-full lg:w-auto flex flex-col gap-1 p-2">
                                    <label className="text-[9px] font-black text-indigo-300 uppercase tracking-[0.3em] ml-4 opacity-70">Security Key</label>
                                    <div className="relative group/field">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-focus-within/field:bg-indigo-500/20 transition-all duration-300">
                                            <FaLock className="text-indigo-400/50 group-focus-within/field:text-indigo-300 text-[10px] transition-colors" />
                                        </div>
                                        <input
                                            type={showPass ? "text" : "password"}
                                            name="password"
                                            required
                                            value={credentials.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            className="w-full pl-14 pr-12 py-4 bg-transparent border-b border-white/5 focus:border-indigo-400/50 text-sm text-indigo-50 placeholder-indigo-900/50 focus:outline-none transition-all font-mono tracking-widest"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPass(!showPass)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-400/50 hover:text-indigo-300 transition-colors p-2"
                                        >
                                            {showPass ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79,70,229,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="h-14 px-10 bg-indigo-600/20 hover:bg-indigo-600/40 backdrop-blur-2xl rounded-2xl font-black text-[10px] text-white uppercase tracking-[0.4em] transition-all border border-indigo-500/40 flex items-center justify-center gap-3 min-w-[200px]"
                                >
                                    {loading ? (
                                        <FaSpinner className="animate-spin text-lg" />
                                    ) : (
                                        <>
                                            INITIALIZE <FaArrowRight className="text-[10px] opacity-70" />
                                        </>
                                    )}
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
