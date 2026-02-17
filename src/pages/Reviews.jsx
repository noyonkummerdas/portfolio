
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
        <div className="pt-32 min-h-screen pb-20 bg-secondary text-white">
            <section className="px-6 max-w-7xl mx-auto mb-12 md:mb-16 text-center">
                <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-primary/30 bg-primary/10 text-primary text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in">
                    Social Proof
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-poppins mb-6 md:mb-8 tracking-tighter text-white">
                    Client Trust<span className="text-primary">.</span>
                </h1>

                <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="px-8 py-3 bg-primary text-secondary font-black rounded-full hover:bg-white transition-all shadow-lg shadow-primary/20 active:scale-95 text-[10px] md:text-xs uppercase tracking-widest"
                >
                    {isFormOpen ? 'Close Form' : '+ Write a Review'}
                </button>
            </section>

            {/* Review Form */}
            {isFormOpen && (
                <div className="max-w-2xl mx-auto px-4 sm:px-6 mb-16 md:mb-20 animate-fade-in">
                    <div className="bg-surface/60 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-xl md:text-2xl font-bold font-poppins text-white mb-6">Share your experience</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none text-sm"
                                    value={newReview.clientName}
                                    onChange={e => setNewReview({ ...newReview, clientName: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Role / Company"
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none text-sm"
                                    value={newReview.position}
                                    onChange={e => setNewReview({ ...newReview, position: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none text-sm"
                                    value={newReview.project}
                                    onChange={e => setNewReview({ ...newReview, project: e.target.value })}
                                    required
                                />
                                <div className="flex gap-2 items-center bg-black/40 border border-white/5 rounded-xl px-4 py-3">
                                    <span className="text-textMain/40 text-[8px] md:text-[10px] mr-2 font-black uppercase tracking-wide">Rating:</span>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                            className={`text-lg transition-all ${star <= newReview.rating ? 'text-primary scale-110' : 'text-gray-600 hover:text-primary/50'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <textarea
                                placeholder="Your feedback..."
                                rows="4"
                                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none resize-none text-sm"
                                value={newReview.content}
                                onChange={e => setNewReview({ ...newReview, content: e.target.value })}
                                required
                            ></textarea>
                            <button type="submit" className="w-full py-4 bg-primary text-secondary font-black rounded-xl transition-all hover:bg-white shadow-lg shadow-primary/10 transform active:scale-[0.98]">
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-6">
                {reviews.map((review) => (
                    <div key={review.id} className="p-6 md:p-8 bg-surface/40 border border-white/5 rounded-2xl text-left backdrop-blur-md relative group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="text-primary mb-6 text-lg md:text-xl tracking-widest">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <p className="text-base md:text-lg text-textMain/80 font-medium mb-8 leading-relaxed font-inter italic">
                            "{review.content}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-secondary font-black text-sm">
                                {review.clientName.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-poppins text-base md:text-lg leading-none">{review.clientName}</h4>
                                <p className="text-primary text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1">{review.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
