
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubmissions } from '../features/hireMeSlice';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const { submissions } = useSelector((state) => state.hireMe);

    useEffect(() => {
        dispatch(fetchSubmissions());
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

            {submissions.length === 0 ? (
                <div className="text-center py-20 bg-slate-100 dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/5">
                    <p className="text-slate-500 dark:text-gray-400">No inquiries received yet.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {submissions.map((item) => (
                        <Link
                            to={`/admin/inquiries/${item._id}`}
                            key={item._id}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white dark:bg-secondary/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-2xl hover:border-indigo-500/50 transition-all group gap-4 md:gap-0 shadow-sm dark:shadow-none"
                        >
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-gray-400 truncate max-w-[250px] sm:max-w-none">{item.email} • {item.company || 'No Company'}</p>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-6">
                                <div className="text-left md:text-right">
                                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">{item.projectType}</div>
                                    <div className="text-xs text-slate-500 dark:text-gray-300">{new Date(item.createdAt).toLocaleDateString()}</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                                    →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
