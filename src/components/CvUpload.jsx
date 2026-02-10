
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadCv, resetUploadStatus } from '../features/cv/cvSlice';
import { FaCloudUploadAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const CvUpload = () => {
    const dispatch = useDispatch();
    const { uploadLoading, uploadError, uploadSuccess } = useSelector((state) => state.cv);

    const [title, setTitle] = useState('');
    const [version, setVersion] = useState('');
    const [file, setFile] = useState(null);

    // Reset status on mount
    useEffect(() => {
        return () => {
            dispatch(resetUploadStatus());
        };
    }, [dispatch]);

    useEffect(() => {
        if (uploadSuccess) {
            setTitle('');
            setVersion('');
            setFile(null);
            // Reset file input value
            const fileInput = document.getElementById('cv-file-input');
            if (fileInput) fileInput.value = '';
        }
    }, [uploadSuccess]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !version || !file) {
            alert('Please fill in all fields and select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('version', version);
        formData.append('pdf', file); // 'pdf' must match backend middleware field name

        dispatch(uploadCv(formData));
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Upload New CV</h2>

            {uploadSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 flex items-center" role="alert">
                    <FaCheckCircle className="mr-2" />
                    <span className="block sm:inline">CV uploaded successfully!</span>
                </div>
            )}

            {uploadError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center" role="alert">
                    <FaExclamationCircle className="mr-2" />
                    <span className="block sm:inline">{uploadError}</span>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        id="title"
                        type="text"
                        placeholder="e.g. Full Stack Developer"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="version">
                        Version
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        id="version"
                        type="text"
                        placeholder="e.g. 1.0.0"
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="cv-file-input">
                        PDF File
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        id="cv-file-input"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex justify-center items-center transition duration-300 ${uploadLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={uploadLoading}
                    >
                        {uploadLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Uploading...
                            </>
                        ) : (
                            <>
                                <FaCloudUploadAlt className="mr-2" />
                                Upload CV
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CvUpload;
