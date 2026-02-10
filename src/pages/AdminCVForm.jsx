import React from 'react';
import CvUpload from '../components/CvUpload';

const AdminCVForm = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-black mb-2 text-white">Upload New CV</h1>
                    <p className="text-gray-400">Upload a new version of your CV/Resume (PDF)</p>
                </div>
                <CvUpload />
            </div>
        </div>
    );
};

export default AdminCVForm;
