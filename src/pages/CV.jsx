import React from 'react';
import CvList from '../components/CvList';

const CV = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-black mb-8 text-center text-white">My Curriculum Vitae</h1>
                <CvList />
            </div>
        </div>
    );
};

export default CV;
