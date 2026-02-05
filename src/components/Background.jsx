
import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-secondary">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-accent/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        </div>
    );
};

export default Background;
