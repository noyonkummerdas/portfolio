
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('inquiries') || '[]');
        setInquiries(data);
    }, []);

    const clearData = () => {
        if (window.confirm('Are you sure you want to delete all inquiries?')) {
            localStorage.removeItem('inquiries');
            setInquiries([]);
        }
    }

    return (
        <div className="pt-32 min-h-screen pb-20 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-black font-poppins text-white">Inquiry Dashboard</h1>
                <button onClick={clearData} className="text-xs text-red-500 hover:text-red-400 font-bold uppercase tracking-widest">
                    Clear All Data
                </button>
            </div>

            {inquiries.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                    <p className="text-gray-400 font-inter">No inquiries received yet.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {inquiries.map((item) => (
                        <Link
                            to={`/admin/inquiries/${item.id}`}
                            key={item.id}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-secondary/40 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-indigo-500/50 transition-all group"
                        >
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                                <p className="text-sm text-gray-400">{item.email} • {item.company || 'No Company'}</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">{item.projectType}</div>
                                    <div className="text-sm text-gray-300">{item.date}</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
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
