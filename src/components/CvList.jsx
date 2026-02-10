
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCvs } from '../features/cv/cvSlice';
import { FaFileDownload, FaHistory } from 'react-icons/fa';

const CvList = () => {
    const dispatch = useDispatch();
    const { cvs, loading, error } = useSelector((state) => state.cv);

    useEffect(() => {
        dispatch(fetchCvs());
    }, [dispatch]);

    // Separate latest CV and old versions
    const latestCv = cvs.length > 0 ? cvs[0] : null; // Assuming backend returns sorted or we sort
    // If backend doesn't sort, we should sort by createdAt desc
    const sortedCvs = [...cvs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const currentLatestCv = sortedCvs.length > 0 ? sortedCvs[0] : null;
    const oldCvs = sortedCvs.slice(1);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-200">
            {currentLatestCv ? (
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mb-8 border border-indigo-100 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Latest CV</h2>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">{currentLatestCv.title || 'My Resume'}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Version: {currentLatestCv.version}</p>
                            <p className="text-xs text-gray-400 mt-1">Uploaded: {new Date(currentLatestCv.createdAt).toLocaleDateString()}</p>
                        </div>
                        <a
                            href={currentLatestCv.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full inline-flex items-center transition duration-300 transform hover:scale-105"
                        >
                            <FaFileDownload className="mr-2" />
                            Download CV
                        </a>
                    </div>
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">No CV available yet.</div>
            )}

            {oldCvs.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-gray-700 dark:text-gray-300">
                        <FaHistory className="mr-2" /> Previous Versions
                    </h3>
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {oldCvs.map((cv) => (
                                <li key={cv._id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-indigo-600 dark:text-indigo-400">{cv.title}</p>
                                        <p className="text-xs text-gray-500">Version: {cv.version} • {new Date(cv.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <a
                                        href={cv.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                                        title="Download"
                                    >
                                        <FaFileDownload />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CvList;
