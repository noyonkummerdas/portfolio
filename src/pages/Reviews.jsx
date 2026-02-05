
import React, { useState, useEffect } from 'react';
import staticReviews from '../data/reviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [newReview, setNewReview] = useState({
        clientName: '',
        position: '',
        project: '',
        rating: 5,
        content: ''
    });

    useEffect(() => {
        const localReviews = JSON.parse(localStorage.getItem('user_reviews') || '[]');
        setReviews([...localReviews, ...staticReviews]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewToAdd = {
            id: Date.now(),
            ...newReview
        };

        const updatedLocalReviews = [reviewToAdd, ...JSON.parse(localStorage.getItem('user_reviews') || '[]')];
        localStorage.setItem('user_reviews', JSON.stringify(updatedLocalReviews));

        setReviews([reviewToAdd, ...reviews]);
        setIsFormOpen(false);
        setNewReview({ clientName: '', position: '', project: '', rating: 5, content: '' });
        alert("Thank you! Your review has been added.");
    };

    return (
        <div className="pt-32 min-h-screen pb-20">
            <section className="px-6 max-w-7xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in">
                    Social Proof
                </div>
                <h1 className="text-6xl md:text-8xl font-black font-poppins mb-8 tracking-tighter text-white">
                    Client Trust<span className="text-indigo-500">.</span>
                </h1>

                <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-400 hover:text-white transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95 text-xs uppercase tracking-widest"
                >
                    {isFormOpen ? 'Close Form' : '+ Write a Review'}
                </button>
            </section>

            {/* Review Form */}
            {isFormOpen && (
                <div className="max-w-2xl mx-auto px-6 mb-20 animate-fade-in">
                    <div className="bg-secondary/60 backdrop-blur-xl border border-indigo-500/30 p-8 rounded-3xl shadow-2xl">
                        <h3 className="text-2xl font-bold font-poppins text-white mb-6">Share your experience</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
                                    value={newReview.clientName}
                                    onChange={e => setNewReview({ ...newReview, clientName: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Role / Company"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
                                    value={newReview.position}
                                    onChange={e => setNewReview({ ...newReview, position: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Project Name (e.g. E-commerce App)"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
                                    value={newReview.project}
                                    onChange={e => setNewReview({ ...newReview, project: e.target.value })}
                                    required
                                />
                                <div className="flex gap-2 items-center bg-black/20 border border-white/10 rounded-xl px-4 py-3">
                                    <span className="text-gray-400 text-sm mr-2 font-bold uppercase tracking-wide">Rating:</span>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                            className={`text-2xl transition-all ${star <= newReview.rating ? 'text-yellow-400 scale-110' : 'text-gray-600 hover:text-yellow-400/50'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <textarea
                                placeholder="Your feedback..."
                                rows="4"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none resize-none"
                                value={newReview.content}
                                onChange={e => setNewReview({ ...newReview, content: e.target.value })}
                                required
                            ></textarea>
                            <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all">
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
                {reviews.map((review) => (
                    <div key={review.id} className="p-10 bg-secondary/40 border border-white/5 rounded-[2rem] text-left backdrop-blur-md relative group hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="text-yellow-400 mb-6 text-xl tracking-widest">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <p className="text-lg text-gray-200 font-medium mb-8 leading-relaxed font-inter">
                            "{review.content}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                {review.clientName.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-poppins text-lg leading-none">{review.clientName}</h4>
                                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mt-1">{review.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
