'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const SimpleChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! I'm the TagVerse AI. How can I help you elevate your enterprise today?",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking and response
        setTimeout(() => {
            const aiResponses = [
                "I understand. Our team specializes in solving exactly that kind of challenge.",
                "That's a fascinating project. TagVerse architecture is designed for such scale.",
                "Could you tell me more about your timeline?",
                "I've noted that. A specialist will review your request shortly.",
                "Excellent choice. AI integration is our core expertise."
            ];
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                sender: 'ai',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl w-[320px] md:w-[380px] h-[500px] mb-4 overflow-hidden pointer-events-auto flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-midnight to-signature-start p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-midnight flex items-center justify-center text-white font-serif text-lg shadow-lg relative overflow-hidden shrink-0 border border-white/20">
                                    <span className="relative z-10">T</span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-sm font-medium tracking-wide">Tagverse AI Expert</h3>
                                    <p className="text-[10px] text-white/60 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-porcelain/30" ref={scrollRef}>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-midnight text-white rounded-br-none'
                                            : 'bg-white border border-subtext/10 text-midnight rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-subtext/10 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-subtext/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-subtext/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-subtext/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-subtext/10">
                            <div className="flex gap-2">
                                <Input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="bg-porcelain border-transparent focus:bg-white transition-all h-10 text-sm rounded-xl"
                                />
                                <Button size="icon" onClick={handleSend} className="bg-midnight hover:bg-signature-start rounded-xl h-10 w-10 shrink-0">
                                    <Send size={16} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-midnight hover:bg-signature-start text-white p-4 rounded-full shadow-xl shadow-midnight/20 pointer-events-auto relative group transition-colors duration-300"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}

                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                )}
            </motion.button>
        </div>
    );
};

export default SimpleChatbot;
