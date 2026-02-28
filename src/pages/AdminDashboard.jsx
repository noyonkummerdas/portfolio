
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubmissions } from '../features/hireMeSlice';
import { fetchCvs } from '../features/cv/cvSlice';
import { FaFileAlt, FaArrowRight } from 'react-icons/fa';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const { cvs } = useSelector((state) => state.cv);

    useEffect(() => {
        dispatch(fetchSubmissions());
        dispatch(fetchCvs());
    }, [dispatch]);

    const clearData = () => {
        alert("Clear All Data is disabled. Submissions are preserved in database.");
    }

    return (
        <div className="pt-32 min-h-screen pb-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 text-center sm:text-left">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Inquiry Dashboard</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/cv" className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold transition-all active:scale-95 text-white">
                        View CV
                    </Link>
                    <button onClick={clearData} className="text-xs text-red-500 hover:text-red-400 font-bold uppercase tracking-widest transition-colors">
                        Clear All Data
                    </button>
                </div>
            </div>

            {/* CV Management Section */}
            <div className="mt-20">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm">CV Versions</h2>
                    <Link to="/admin/cv" className="text-xs font-black text-indigo-600 hover:text-indigo-500 uppercase tracking-widest transition-colors">
                        + New Version
                    </Link>
                </div>

                {cvs.length === 0 ? (
                    <div className="text-center py-12 bg-slate-100 dark:bg-white/5 rounded-3xl border border-dashed border-slate-300 dark:border-white/10">
                        <p className="text-slate-500 dark:text-gray-400">No CV versions uploaded to backend.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cvs.map((cv) => (
                            <Link
                                key={cv._id}
                                to={`/admin/cv/${cv._id}`}
                                className="group p-6 bg-white dark:bg-secondary/40 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-indigo-500/50 transition-all flex items-center justify-between shadow-sm dark:shadow-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <FaFileAlt />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{cv.version}</h3>
                                        <p className="text-xs text-slate-500 dark:text-gray-400">{new Date(cv.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <FaArrowRight className="text-slate-300 dark:text-gray-600 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
