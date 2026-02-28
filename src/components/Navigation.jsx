import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Dashboard', path: '/admin' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 dark:border-white/5 bg-slate-100/60 dark:bg-secondary/60 backdrop-blur-xl print:hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Mobile Menu Toggle - Left Side */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-secondary/5 dark:bg-white/5 text-secondary dark:text-white border border-secondary/10 dark:border-white/10 transition-all active:scale-95"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter text-secondary dark:text-white">
                        PORTFOLIO<span className="text-primary">.</span>2026
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-secondary/60 dark:text-textMain/60">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-primary transition-colors ${location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)) ? 'text-primary border-b-2 border-primary pb-1' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-secondary/5 dark:bg-white/5 text-secondary dark:text-white hover:bg-secondary/10 dark:hover:bg-white/10 transition-all border border-secondary/10 dark:border-white/10"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
                    </button>

                    <Link
                        to="/hire-me"
                        className="hidden sm:inline-block px-6 py-2 bg-primary text-secondary text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-primary dark:hover:bg-white dark:hover:text-secondary transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-secondary border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-secondary/60 dark:text-textMain/60">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`hover:text-primary transition-colors ${location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)) ? 'text-primary' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact</a>
                            <Link
                                to="/hire-me"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full text-center px-6 py-4 bg-primary text-secondary rounded-xl font-black"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
