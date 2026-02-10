import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaArrowLeft, FaCloudUploadAlt } from 'react-icons/fa';
import { uploadCv, resetUploadStatus } from '../features/cv/cvSlice';

const AdminCVForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { uploadLoading, uploadError, uploadSuccess } = useSelector((state) => state.cv);

    const [formData, setFormData] = useState({
        title: '',
        version: '',
        pdf: null
    });

    useEffect(() => {
        if (uploadSuccess) {
            // Optional: Redirect or show success message then reset
            const timer = setTimeout(() => {
                dispatch(resetUploadStatus());
                // navigate('/cv'); // Uncomment to auto-redirect
                setFormData({ title: '', version: '', pdf: null }); // Reset form
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [uploadSuccess, dispatch, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            pdf: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting CV:', formData);

        if (!formData.pdf) {
            alert('Please select a PDF file');
            return;
        }

        const data = new FormData();
        data.append('title', formData.title);
        data.append('version', formData.version);
        data.append('pdf', formData.pdf);

        dispatch(uploadCv(data));
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-black text-white">Upload New CV</h1>
                    <button
                        onClick={() => navigate('/cv')}
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all flex items-center gap-2"
                    >
                        <FaArrowLeft /> Back to CV
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Upload Status Messages */}
                    {uploadLoading && (
                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                            Uploading...
                        </div>
                    )}
                    {uploadError && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl">
                            Error: {typeof uploadError === 'object' ? JSON.stringify(uploadError) : uploadError}
                        </div>
                    )}
                    {uploadSuccess && (
                        <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl">
                            CV Uploaded Successfully! Reseting form...
                        </div>
                    )}

                    {/* Basic Info */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
                        <h2 className="text-2xl font-bold mb-6 text-indigo-400">CV Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 mb-2">Title / Label</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white outline-none transition-all placeholder-gray-600"
                                    placeholder="e.g. Senior React Developer"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Version</label>
                                <input
                                    type="text"
                                    name="version"
                                    value={formData.version}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white outline-none transition-all placeholder-gray-600"
                                    placeholder="e.g. 1.0.0"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-gray-400 mb-2">PDF File</label>
                            <div className="relative border-2 border-dashed border-white/10 rounded-xl p-8 hover:border-indigo-500/50 transition-colors bg-black/20">
                                <input
                                    type="file"
                                    name="pdf"
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    required
                                />
                                <div className="text-center">
                                    <FaCloudUploadAlt className="mx-auto text-4xl text-gray-500 mb-3" />
                                    <p className="text-gray-300 font-medium mb-1">
                                        {formData.pdf ? formData.pdf.name : "Click to upload or drag and drop"}
                                    </p>
                                    <p className="text-gray-500 text-sm">PDF (MAX. 5MB)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-6 border-t border-white/10">
                        <button
                            type="submit"
                            disabled={uploadLoading}
                            className={`px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 ${uploadLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <FaSave /> {uploadLoading ? 'Uploading...' : 'Upload CV'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminCVForm;
