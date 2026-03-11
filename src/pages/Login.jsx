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
    const [celestialState, setCelestialState] = useState({
        ratio: 0, // 0 = Pure Sun, 1 = Pure Moon
        isDay: true
    });
    const [hoveredPlanet, setHoveredPlanet] = useState(null);

    useEffect(() => {
        const calculateCelestial = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const totalMinutes = hours * 60 + minutes;

            let ratio;
            if (hours >= 12) {
                const pmMinutes = totalMinutes - 720;
                ratio = pmMinutes / 720;
            } else {
                ratio = 1 - (totalMinutes / 720);
            }

            setCelestialState({
                ratio: ratio,
                isDay: ratio < 0.5
            });
        };

        calculateCelestial();
        const timer = setInterval(calculateCelestial, 60000);
        return () => clearInterval(timer);
    }, []);

    const planets = [
        { name: 'Chandra (Moon)', size: 'w-8 h-8', texture: 'bg-gradient-to-br from-slate-100 to-indigo-100', glow: 'shadow-white/70', radius: 170, speed: 1200, delay: 0 },
        { name: 'Mangala (Mars)', size: 'w-7 h-7', texture: 'bg-gradient-to-br from-red-500 to-red-900', glow: 'shadow-red-600/70', radius: 205, speed: 2500, delay: 40 },
        { name: 'Budha (Mercury)', size: 'w-6 h-6', texture: 'bg-gradient-to-br from-emerald-400 to-emerald-700', glow: 'shadow-emerald-500/70', radius: 240, speed: 1000, delay: 80 },
        { name: 'Brihaspati (Jupiter)', size: 'w-14 h-14', texture: 'bg-[repeating-linear-gradient(0deg,#fbbf24,#f59e0b_10px,#d97706_20px)]', glow: 'shadow-yellow-600/70', radius: 285, speed: 5000, delay: 120 },
        { name: 'Shukra (Venus)', size: 'w-8 h-8', texture: 'bg-gradient-to-br from-white via-indigo-50 to-blue-200', glow: 'shadow-blue-200/70', radius: 330, speed: 1800, delay: 160 },
        { name: 'Shani (Saturn)', size: 'w-12 h-12', texture: 'bg-gradient-to-br from-slate-700 via-indigo-950 to-black', glow: 'shadow-purple-900/70', radius: 380, speed: 12000, delay: 200, hasRings: true },
        { name: 'Rahu', size: 'w-10 h-10', texture: 'bg-gradient-to-br from-gray-800 via-zinc-900 to-black', glow: 'shadow-gray-900/80', radius: 430, speed: 8000, delay: 240, isRetrograde: true },
        { name: 'Ketu', size: 'w-9 h-9', texture: 'bg-gradient-to-br from-stone-600 to-stone-900', glow: 'shadow-stone-800/70', radius: 480, speed: 9500, delay: 280, isRetrograde: true }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlanetIndex((prev) => (prev + 1) % planets.length);
        }, 15000);
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

    return (
        <div
            className="min-h-screen relative flex items-center justify-end p-10 pr-24 font-inter overflow-hidden transition-colors duration-[2000ms]"
            style={{
                backgroundColor: celestialState.ratio > 0.5 ? '#020408' : '#0a0d14'
            }}
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url('/navagraha_bg.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/30" />

                {/* Dynamic Celestial Core (Sun/Moon Controller) */}
                <div
                    onMouseEnter={() => setHoveredPlanet('center')}
                    onMouseLeave={() => setHoveredPlanet(null)}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-auto w-0 h-0 cursor-pointer"
                >
                    {/* Celestial Body Core */}
                    <div className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{
                                scale: hoveredPlanet === 'center' ? 1.15 : [1, 1.05, 1],
                                rotate: [0, 360],
                                boxShadow: celestialState.ratio < 0.5
                                    ? (hoveredPlanet === 'center' ? "0 0 250px rgba(234,88,12,1)" : ["0 0 80px rgba(249,115,22,0.8)", "0 0 150px rgba(234,88,12,1)", "0 0 80px rgba(249,115,22,0.8)"])
                                    : (hoveredPlanet === 'center' ? "0 0 180px rgba(147,197,253,0.8)" : ["0 0 60px rgba(147,197,253,0.5)", "0 0 100px rgba(147,197,253,0.7)", "0 0 60px rgba(147,197,253,0.5)"])
                            }}
                            transition={{
                                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="w-[280px] h-[280px] rounded-full transition-all duration-[5000ms] border-2 border-white/20 relative overflow-hidden"
                            style={{
                                background: celestialState.ratio < 0.5
                                    ? 'radial-gradient(circle at center, #fff 0%, #fbbf24 30%, #f59e0b 60%, #ea580c 100%)'
                                    : 'radial-gradient(circle at center, #f8fafc 0%, #cbd5e1 30%, #94a3b8 60%, #475569 100%)'
                            }}
                        >
                            {/* Inner Axial Detail Layer */}
                            <motion.div
                                animate={{ rotate: [360, 0] }}
                                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 opacity-40 mix-blend-overlay"
                                style={{
                                    background: celestialState.ratio < 0.5
                                        ? 'conic-gradient(from 0deg, transparent, #fbbf24, transparent, #f59e0b, transparent)'
                                        : 'conic-gradient(from 0deg, transparent, #fff, transparent, #cbd5e1, transparent)'
                                }}
                            />
                        </motion.div>

                        {/* Dynamic Lens Flare (Static but integrated) */}
                        <div
                            className="absolute inset-0 w-[600px] h-[600px] rounded-full blur-[80px] pointer-events-none opacity-40 mix-blend-soft-light transition-all duration-3000"
                            style={{
                                background: celestialState.ratio < 0.5
                                    ? 'radial-gradient(farthest-corner at 40% 40%, #fbbf24 0%, transparent 100%)'
                                    : 'radial-gradient(farthest-corner at 40% 40%, #fff 0%, transparent 100%)'
                            }}
                        />
                    </div>
                </div>

                {/* Centered Orbital System */}
                <div
                    className="absolute inset-0 flex items-center justify-center z-10 pointer-events-auto"
                    style={{ perspective: "2500px" }}
                >
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{
                            transform: "rotateX(75deg)", // Horizontal Perspective
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {planets.map((planet, idx) => (
                            <React.Fragment key={idx}>
                                {/* Wide Orbital Path */}
                                <div
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full z-0 pointer-events-none"
                                    style={{
                                        width: planet.radius * 2,
                                        height: planet.radius * 2,
                                        borderWidth: (currentPlanetIndex === idx || hoveredPlanet === idx) ? '2px' : '1.5px',
                                        borderColor: (currentPlanetIndex === idx || hoveredPlanet === idx)
                                            ? (idx === 0 ? 'rgba(248,250,252,0.8)' : // Moon (Chandra) - Silver/White
                                                idx === 1 ? 'rgba(239,68,68,0.8)' :  // Mars (Mangala) - Red
                                                    idx === 2 ? 'rgba(52,211,153,0.8)' : // Mercury (Budha) - Emerald
                                                        idx === 3 ? 'rgba(245,158,11,0.8)' : // Jupiter (Brihaspati) - Gold/Orange
                                                            idx === 4 ? 'rgba(147,197,253,0.8)' : // Venus (Shukra) - Blue/White
                                                                idx === 5 ? 'rgba(129,140,248,0.8)' : // Saturn (Shani) - Purple/Dark
                                                                    idx === 6 ? 'rgba(156,163,175,0.8)' : // Rahu - Gray
                                                                        'rgba(168,162,158,0.8)') // Ketu - Stone
                                            : 'rgba(255,255,255,0.15)',
                                        boxShadow: (currentPlanetIndex === idx || hoveredPlanet === idx)
                                            ? `0 0 30px currentColor`
                                            : `0 0 5px rgba(255,255,255,0.1)`,
                                        transition: 'all 0.8s ease'
                                    }}
                                />

                                {/* Centering Wrapper for Orbit */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                                    style={{
                                        width: planet.radius * 2,
                                        height: planet.radius * 2,
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    <motion.div
                                        animate={{ rotate: planet.isRetrograde ? -360 : 360 }}
                                        transition={{
                                            duration: planet.speed * 1.5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: -planet.delay
                                        }}
                                        className="w-full h-full"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {/* Planet Positioner */}
                                        <div
                                            className="absolute right-0 top-1/2 -translate-y-1/2"
                                            style={{
                                                transform: "translateX(50%)",
                                                transformStyle: "preserve-3d"
                                            }}
                                        >
                                            <div
                                                className="relative"
                                                style={{
                                                    transform: "rotateX(-75deg) translateZ(20px)", // Stand upright and LIFT off the plane
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <div style={{ transformStyle: "preserve-3d" }}>
                                                    {/* Advanced HUD Planetary Scanner Popup (Only for Sun/Moon) */}
                                                    <AnimatePresence>
                                                        {(currentPlanetIndex === idx && idx < 2) && (
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
                                                        onMouseEnter={() => setHoveredPlanet(idx)}
                                                        onMouseLeave={() => setHoveredPlanet(null)}
                                                        animate={{
                                                            scale: (hoveredPlanet === idx && idx < 2) ? 1.5 : (currentPlanetIndex === idx && idx < 2 ? 1.2 : 1),
                                                            rotate: [0, -360], // Every planet spins on its own axis
                                                            filter: ((hoveredPlanet === idx || currentPlanetIndex === idx) && idx < 2) ? "brightness(1.5) saturate(1.2)" : "brightness(1)",
                                                            y: (hoveredPlanet === idx && idx < 2) ? [0, -20, 0] : 0
                                                        }}
                                                        transition={{
                                                            rotate: { duration: idx < 2 ? 3 : 10, repeat: Infinity, ease: "linear" }, // Axial rotation
                                                            scale: { duration: (hoveredPlanet === idx && idx < 2) ? 0.3 : 1 },
                                                            filter: { duration: 0.5 }
                                                        }}
                                                        className={`${planet.size} ${planet.texture} rounded-full shadow-[0_0_30px] ${idx < 2 ? `shadow-[0_0_80px] ${planet.glow}` : 'shadow-white/20'} relative z-[100] border transition-all duration-[1000ms] ${idx < 2 ? 'border-2 border-white/60' : 'border-white/20'} cursor-pointer`}
                                                    >
                                                        {/* Highlight Aura Pulse (Sun/Moon only) */}
                                                        {(currentPlanetIndex === idx || hoveredPlanet === idx) && idx < 2 && (
                                                            <motion.div
                                                                animate={{
                                                                    opacity: [0.2, 0.5, 0.2],
                                                                    scale: [1, 1.5, 1]
                                                                }}
                                                                transition={{ duration: 2, repeat: Infinity }}
                                                                className={`absolute inset-0 rounded-full blur-2xl ${planet.texture} opacity-50 z-[-1]`}
                                                            />
                                                        )}

                                                        {/* Surface Glint (Sun/Moon only) */}
                                                        {idx < 2 && (
                                                            <div className="absolute inset-0 rounded-full overflow-hidden opacity-30 mix-blend-overlay pointer-events-none">
                                                                <motion.div
                                                                    animate={{ x: ['-150%', '150%'], y: ['-150%', '150%'] }}
                                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                                    className="w-[60%] h-[300%] bg-white/50 rotate-[45deg]"
                                                                />
                                                            </div>
                                                        )}

                                                        {/* Hover Name Popup */}
                                                        <AnimatePresence>
                                                            {hoveredPlanet === idx && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                                                    animate={{ opacity: 1, y: -40, scale: 1 }}
                                                                    exit={{ opacity: 0, y: 0, scale: 0.8 }}
                                                                    className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-[110]"
                                                                >
                                                                    <div className="bg-indigo-600/90 backdrop-blur-md px-3 py-1 rounded-lg border border-indigo-400/50 shadow-lg">
                                                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{planet.name}</span>
                                                                    </div>
                                                                    <div className="w-[1px] h-4 bg-indigo-400 mx-auto" />
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>

                                                        {/* Light/Shadow Simulation */}
                                                        <div
                                                            className="absolute inset-0 rounded-full transition-all duration-[3000ms]"
                                                            style={{
                                                                background: celestialState.ratio < 0.5
                                                                    ? 'radial-gradient(circle at 30% 30%, transparent 0%, rgba(0,0,0,0.7) 100%)'
                                                                    : 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%)'
                                                            }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Animated Orbs */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-50 text-right"
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
                                <motion.div animate={{ scale: 1 }}>
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
                            className="bg-transparent backdrop-blur-[2px] border border-white/10 rounded-[32px] p-8 relative group max-w-[420px] w-full"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                {error && (
                                    <motion.div className="bg-red-500/20 border border-red-500/40 rounded-2xl p-3 text-red-400 text-[10px] font-black uppercase tracking-widest text-center">
                                        {error}
                                    </motion.div>
                                )}
                                <div className="flex flex-col gap-1">
                                    <label className="text-[9px] font-black text-indigo-300 uppercase tracking-[0.3em] ml-4 opacity-70">Identity Protocol</label>
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400/50" />
                                        <input
                                            type="text"
                                            name="username"
                                            required
                                            value={credentials.username}
                                            onChange={handleChange}
                                            placeholder="UNITS_ID"
                                            className="w-full pl-14 pr-4 py-4 bg-transparent border-b border-white/5 focus:border-indigo-400/50 text-sm text-indigo-50 focus:outline-none font-mono tracking-widest"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[9px] font-black text-indigo-300 uppercase tracking-[0.3em] ml-4 opacity-70">Security Key</label>
                                    <div className="relative">
                                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400/50" />
                                        <input
                                            type={showPass ? "text" : "password"}
                                            name="password"
                                            required
                                            value={credentials.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            className="w-full pl-14 pr-12 py-4 bg-transparent border-b border-white/5 focus:border-indigo-400/50 text-sm text-indigo-50 focus:outline-none font-mono tracking-widest"
                                        />
                                        <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-400/50 p-2">
                                            {showPass ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    className="h-14 bg-indigo-500/20 border border-indigo-400/40 rounded-2xl font-black text-[10px] text-white uppercase tracking-[0.4em] flex items-center justify-center gap-3"
                                >
                                    {loading ? <FaSpinner className="animate-spin" /> : <>INITIALIZE <FaArrowRight /></>}
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="mt-12 text-center opacity-50">
                    <p className="text-[9px] text-gray-600 uppercase tracking-[0.6em] font-black leading-loose">
                        NK NOYON OS v4.0.2 <br />
                        <span className="text-indigo-500/30">QUANTUM ENCRYPTION ACTIVE</span>
                    </p>
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
                body { font-family: 'Inter', sans-serif; background: #000; }
                .font-mono { font-family: 'JetBrains Mono', monospace; }
                input:-webkit-autofill { -webkit-text-fill-color: white; -webkit-box-shadow: 0 0 0px 1000px #111827 inset; }
            `}} />
        </div>
    );
};

export default Login;
