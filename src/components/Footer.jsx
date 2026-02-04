import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer id="contact" className="py-32 px-6 text-center max-w-7xl mx-auto border-t border-white/5 mt-24">
            <h2 className="text-5xl md:text-8xl font-black font-poppins tracking-tighter mb-12">
                Ready to elevate <br />
                <span className="text-indigo-500">your next venture?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12 justify-center items-center mb-24">
                {/* <a href="mailto:contact@example.com" className="text-2xl font-bold font-poppins hover:text-indigo-500 transition-colors flex items-center gap-4 group"> */}
                <Link to="/hello-developer" className="text-2xl font-bold font-poppins hover:text-indigo-500 transition-colors flex items-center gap-4 group">
                    hello@developer.com
                    <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-all">
                        <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                </Link>
                {/* </a> */}
            </div>
            <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] font-black uppercase tracking-widest gap-6">
                <div>© 2026 Developer Portfolio — All Rights Reserved</div>
                <div className="flex gap-8">
                    <button className="hover:text-white transition-colors">LinkedIn</button>
                    <button className="hover:text-white transition-colors">GitHub</button>
                    <button className="hover:text-white transition-colors">Twitter</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
