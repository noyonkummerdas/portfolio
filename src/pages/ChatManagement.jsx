import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatHistory, adminReplyToChat } from '../features/chatbot/chatbotSlice';
import { FaRobot, FaUser, FaReply, FaSpinner, FaHistory, FaExclamationTriangle } from 'react-icons/fa';

const ChatManagement = () => {
    const dispatch = useDispatch();
    const { history, loading, error } = useSelector((state) => state.chatbot);
    const [replyText, setReplyText] = useState({});
    const [sendingReply, setSendingReply] = useState({});

    useEffect(() => {
        dispatch(fetchChatHistory());
    }, [dispatch]);

    const handleReplyChange = (chatId, text) => {
        setReplyText(prev => ({ ...prev, [chatId]: text }));
    };

    const handleSendReply = async (chatId) => {
        const text = replyText[chatId];
        if (!text || !text.trim()) return;

        setSendingReply(prev => ({ ...prev, [chatId]: true }));
        try {
            await dispatch(adminReplyToChat({ chatId, reply: text })).unwrap();
            setReplyText(prev => ({ ...prev, [chatId]: '' }));
        } catch (err) {
            console.error("Failed to send reply:", err);
            alert("Error sending reply: " + (err || "Unknown error"));
        } finally {
            setSendingReply(prev => ({ ...prev, [chatId]: false }));
        }
    };

    return (
        <div className="pt-32 min-h-screen pb-20 px-6 max-w-5xl mx-auto font-inter">
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
                    <FaHistory className="text-2xl" />
                </div>
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Chat Management</h1>
                    <p className="text-sm text-slate-500 dark:text-gray-400">Monitor and respond to AI-Proxy conversations</p>
                </div>
            </div>

            {error && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400">
                    <FaExclamationTriangle />
                    <p className="font-medium text-sm">Error: {error}</p>
                    <button
                        onClick={() => dispatch(fetchChatHistory())}
                        className="ml-auto text-xs font-bold uppercase tracking-widest hover:underline"
                    >
                        Retry
                    </button>
                </div>
            )}

            {loading && history.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <FaSpinner className="animate-spin text-4xl mb-4" />
                    <p>Loading conversation logs...</p>
                </div>
            ) : history.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 dark:bg-white/5 rounded-3xl border border-dashed border-slate-200 dark:border-white/10">
                    <p className="text-slate-500 italic">No chat history found in the database.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {history.map((chat) => (
                        <div key={chat._id} className="bg-white dark:bg-secondary/40 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                            {/* User & AI Interaction */}
                            <div className="p-6 space-y-4 bg-slate-50/50 dark:bg-transparent border-b border-slate-100 dark:border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <FaUser className="text-slate-500 text-xs" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">User Question</p>
                                            <span className="text-[10px] text-slate-400 font-mono">IP: {chat.senderIp || 'Unknown'}</span>
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed">{chat.userMessage}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                        <FaRobot className="text-white text-xs" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">AI Response</p>
                                        <p className="text-slate-600 dark:text-gray-400 italic text-sm leading-relaxed">{chat.aiResponse}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Admin Reply Section */}
                            <div className="p-6">
                                {chat.adminResponse ? (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                                        <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-1">Your Manual Reply</p>
                                        <p className="text-green-700 dark:text-green-300 font-bold">{chat.adminResponse}</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="text"
                                            value={replyText[chat._id] || ''}
                                            onChange={(e) => handleReplyChange(chat._id, e.target.value)}
                                            placeholder="Write a manual reply..."
                                            className="flex-1 bg-slate-100 dark:bg-white/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
                                        />
                                        <button
                                            onClick={() => handleSendReply(chat._id)}
                                            disabled={sendingReply[chat._id]}
                                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                                        >
                                            {sendingReply[chat._id] ? <FaSpinner className="animate-spin" /> : <FaReply />}
                                            Send
                                        </button>
                                    </div>
                                )}
                                <div className="mt-4 flex justify-end px-1">
                                    <span className="text-[10px] text-slate-400">{new Date(chat.timestamp).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatManagement;

