
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const InquiryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [inquiry, setInquiry] = useState(null);

    useEffect(() => {
        const fetchInquiry = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/hire-me/${id}`);
                const data = await response.json();
                if (response.ok) {
                    setInquiry(data);
                } else {
                    navigate('/admin');
                }
            } catch (err) {
                console.error('Fetch Error:', err);
                navigate('/admin');
            }
        };
        fetchInquiry();
    }, [id, navigate]);

    if (!inquiry) return null;

    return (
        <div className="pt-32 min-h-screen pb-20 px-6 max-w-5xl mx-auto">
            <Link to="/admin" className="text-[10px] md:text-xs font-black text-gray-500 hover:text-indigo-400 uppercase tracking-widest mb-8 flex items-center gap-2 transition-colors">
                ← Back to Dashboard
            </Link>

            <div className="bg-secondary/40 backdrop-blur-xl border border-white/5 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/10 pb-8 mb-8">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black font-poppins text-white mb-2 leading-tight">{inquiry.name}</h1>
                        <p className="text-lg md:text-xl text-indigo-400 font-medium">{inquiry.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                        <div className="inline-block px-4 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">
                            {inquiry.projectType}
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm">{new Date(inquiry.createdAt).toLocaleString()}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    <div>
                        <h3 className="text-[10px] uppercase tracking-widest font-black text-gray-500 mb-4">Contact Info</h3>
                        <p className="text-base md:text-lg text-white font-inter break-all">{inquiry.email}</p>
                    </div>
                    <div>
                        <h3 className="text-[10px] uppercase tracking-widest font-black text-gray-500 mb-4">Budget & Timeline</h3>
                        <p className="text-base md:text-lg text-white font-inter mb-1">Budget: <span className="text-green-400 font-bold">{inquiry.budget}</span></p>
                        <p className="text-base md:text-lg text-white font-inter">Timeline: {inquiry.timeline}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-black text-gray-500 mb-6">Project Requirements</h3>
                    <div className="bg-black/20 rounded-xl md:rounded-2xl p-6 border border-white/5">
                        <p className="text-sm md:text-base text-gray-300 font-inter leading-relaxed whitespace-pre-wrap">
                            {inquiry.message || "No additional details provided."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InquiryDetails;
