'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useUIStore } from '@/store/use-ui-store';

export default function UserChatPage() {
  const { addToast } = useUIStore();
  
  const [messages, setMessages] = useState([
    { id: 1, sender: 'host', text: 'Hi! Welcome to Boston and Symphony Road lofts. I verified your escrow deposit successfully!', date: '10:32 AM' },
    { id: 2, sender: 'tenant', text: 'Thank you Sarah! I am finishing up my flight travel itinerary. Can we coordinate airport pick up?', date: '10:34 AM' },
    { id: 3, sender: 'host', text: 'Absolutely. Please upload your flight details PDF in the secure document vault here, and I will dispatch a shuttle coordinator.', date: '10:35 AM' },
  ]);

  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'tenant',
      text: inputVal,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMsg]);
    setInputVal('');

    // Mock host auto-reply response after 1.5 seconds
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'host',
          text: 'Understood. Let me check the details with my transport coordinator.',
          date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      addToast({ type: 'info', message: 'New message received from Sarah Peterson.' });
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Messages & Files</h1>
        <p className="text-sm text-slate-400 font-light">Interact securely with verified property hosts, platform support agents, and AI relocation assistants.</p>
      </div>

      <div className="glass-card grid grid-cols-12 p-0 overflow-hidden border-white/5 h-[580px]">
        {/* Chat conversations list pane */}
        <section className="col-span-12 md:col-span-4 border-r border-white/5 flex flex-col h-full bg-[#0f172a]/20">
          <div className="p-4 border-b border-white/5 font-bold text-xs uppercase tracking-wider text-slate-500">
            Active Chats
          </div>
          
          <div className="flex-1 overflow-y-auto divide-y divide-white/5">
            <div className="p-4 flex items-center gap-3 bg-indigo-600/10 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-xs text-indigo-400">
                SP
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0">Sarah Peterson</h4>
                <p className="text-[10px] text-indigo-300/80 truncate max-w-[150px]">Boston Host • Online</p>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3 hover:bg-slate-900/30 cursor-pointer transition-colors">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-xs text-indigo-400">
                AI
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0">Rentora AI Assistant</h4>
                <p className="text-[10px] text-slate-500 truncate max-w-[150px]">Immigration planning circle</p>
              </div>
            </div>
          </div>
        </section>

        {/* Message Window Pane */}
        <section className="col-span-12 md:col-span-8 flex flex-col h-full bg-[#020617]/50 justify-between">
          <div className="p-4 border-b border-white/5 bg-slate-900/40 flex-between">
            <div>
              <h4 className="text-sm font-bold text-white mb-0">Sarah Peterson</h4>
              <p className="text-[10px] text-slate-500">Response Rate 100% • Standard response time under 1 hour</p>
            </div>
            <button 
              onClick={() => addToast({ type: 'success', message: 'Triggering mock video call stream...' })}
              className="px-3 py-1.5 bg-slate-900 border border-white/10 hover:bg-slate-900/60 rounded text-[10px] text-slate-300 font-semibold"
            >
              📞 Call
            </button>
          </div>

          {/* Conversation messages block */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m) => {
              const isMe = m.sender === 'tenant';
              return (
                <div 
                  key={m.id} 
                  className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md p-4 rounded-xl text-xs leading-relaxed ${
                    isMe 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-slate-900 border border-white/5 text-slate-200 rounded-tl-none'
                  }`}>
                    <p className="mb-1">{m.text}</p>
                    <div className={`text-[9px] text-right ${isMe ? 'text-indigo-200' : 'text-slate-500'}`}>
                      {m.date}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={chatEndRef} />
          </div>

          {/* Input text form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/5 bg-slate-900/20 flex gap-3">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type your secure message here..."
              className="flex-1 px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
            <button 
              type="submit" 
              className="px-5 btn-premium font-semibold text-xs rounded-lg"
            >
              Send
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
