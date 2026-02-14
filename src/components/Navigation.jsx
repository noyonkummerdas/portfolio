import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navigation = () => {
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 dark:border-white/5 bg-white/60 dark:bg-secondary/60 backdrop-blur-xl print:hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link to="/" className="text-xl font-black font-poppins tracking-tighter text-secondary dark:text-white">
                    PORTFOLIO<span className="text-primary">.</span>2026
                </Link>
                <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-secondary/60 dark:text-textMain/60">
                    <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Home</Link>
                    <Link to="/projects" className={`hover:text-primary transition-colors ${location.pathname === '/projects' ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Projects</Link>
                    <Link to="/reviews" className={`hover:text-primary transition-colors ${location.pathname === '/reviews' ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Reviews</Link>
                    <Link to="/admin" className={`hover:text-primary transition-colors ${location.pathname.startsWith('/admin') ? 'text-primary border-b-2 border-primary pb-1' : ''}`}>Dashboard</Link>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl bg-secondary/5 dark:bg-white/5 text-secondary dark:text-white hover:bg-secondary/10 dark:hover:bg-white/10 transition-all border border-secondary/10 dark:border-white/10"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
                    </button>

                    <Link
                        to="/hire-me"
                        className="px-6 py-2 bg-primary text-secondary text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-primary dark:hover:bg-white dark:hover:text-secondary transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
