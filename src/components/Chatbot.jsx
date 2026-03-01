import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaRobot, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../features/chatbot/chatbotSlice';

const Chatbot = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { messages, loading: isTyping } = useSelector((state) => state.chatbot);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        dispatch(sendMessage(inputValue));
        setInputValue('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                    className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white border border-[#d0d7de] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col font-inter"
                >
                    {/* Header */}
                    <div className="bg-[#0969da] text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <FaRobot className="text-white text-lg" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#0969da] rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">NK-AI Proxy</h3>
                                <p className="text-[10px] text-white/80">Online | Connecting to backend...</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="h-80 p-4 overflow-y-auto bg-[#f6f8fa] flex flex-col gap-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
                            >
                                <div className="mt-1 flex-shrink-0">
                                    {msg.sender === 'user' ? (
                                        <FaUserCircle className="text-[#57606a] text-xl" />
                                    ) : (
                                        <div className="w-6 h-6 bg-[#0969da] rounded-full flex items-center justify-center">
                                            <FaRobot className="text-white text-xs" />
                                        </div>
                                    )}
                                </div>
                                <div
                                    className={`p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-[#0969da] text-white rounded-tr-none'
                                        : 'bg-white border border-[#d0d7de] text-[#1f2328] rounded-tl-none shadow-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex gap-2 max-w-[85%] self-start">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-6 h-6 bg-[#0969da] rounded-full flex items-center justify-center">
                                        <FaRobot className="text-white text-xs" />
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-[#d0d7de] rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#57606a] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-[#57606a] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-[#57606a] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-[#d0d7de]">
                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about NK's experience..."
                                className="flex-1 px-4 py-2 bg-[#f6f8fa] border border-[#d0d7de] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0969da]/30 focus:border-[#0969da] transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim()}
                                className="p-3 bg-[#0969da] text-white rounded-full hover:bg-[#0860ca] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                            >
                                <FaPaperPlane className="text-sm" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Chatbot;
