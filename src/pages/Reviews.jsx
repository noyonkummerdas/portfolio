import React from 'react';
import reviews from '../data/reviews';

const Reviews = () => {
    return (
        <div className="pt-32 min-h-screen bg-[#0F0F0F] text-white">
            <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
                <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">
                    Social Proof
                </div>
                <h1 className="text-6xl md:text-9xl font-black font-poppins mb-12 tracking-tighter">
                    Client Trust<span className="text-indigo-500">.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reviews.map((review) => (
                        <div key={review.id} className="p-10 bg-white/5 border border-white/10 rounded-3xl text-left backdrop-blur-xl relative group">
                            <div className="text-indigo-500 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-2xl">★</span>
                                ))}
                            </div>
                            <p className="text-xl text-gray-300 font-medium mb-10 leading-relaxed italic">
                                "{review.content}"
                            </p>
                            <div>
                                <h4 className="text-white font-bold font-poppins text-lg">{review.clientName}</h4>
                                <p className="text-indigo-400 text-xs font-black uppercase tracking-widest">{review.position}</p>
                                <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-gray-500 font-inter uppercase tracking-widest">
                                    Verified for: {review.project}
                                </div>
                            </div>
                            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-25 transition-opacity">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5694 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5694 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5694 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91241 16 8.017 16H11.017C11.5694 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5694 8 11.017 8H7.01701C6.46473 8 6.01701 8.44772 6.01701 9V12C6.01701 12.5523 5.5694 13 5.01701 13H4.01701V21H6.017Z" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Reviews;
