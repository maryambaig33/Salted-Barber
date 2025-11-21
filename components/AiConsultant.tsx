import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { getStyleAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Button } from './Button';

export const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to the Chair. I'm your virtual grooming consultant. Not sure what cut suits your face shape? Describe your hair type or style goals, and I'll advise." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getStyleAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm momentarily distracted by a complex fade. Please ask again shortly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-salt-900 relative overflow-hidden">
       {/* Decorative background elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-bronze-600/5 rounded-full filter blur-3xl"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-bronze-900/30 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-bronze-500 mr-2" />
            <span className="text-bronze-400 text-sm uppercase tracking-wider font-bold">AI Powered</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Virtual Style Consultant</h2>
          <p className="text-salt-400 max-w-2xl mx-auto">
            Unsure about your next look? Ask our Gemini-powered AI barber for personalized recommendations based on your face shape and hair texture.
          </p>
        </div>

        <div className="bg-salt-950 border border-salt-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-salt-700' : 'bg-bronze-900/50 border border-bronze-700'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-salt-300" /> : <Bot size={14} className="text-bronze-500" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-salt-800 text-white rounded-tr-none' 
                      : 'bg-salt-900/50 border border-salt-800 text-salt-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex flex-row gap-3">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bronze-900/50 border border-bronze-700 flex items-center justify-center">
                     <Bot size={14} className="text-bronze-500" />
                   </div>
                   <div className="bg-salt-900/50 border border-salt-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                     <div className="w-2 h-2 bg-bronze-500 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-bronze-500 rounded-full animate-bounce delay-75"></div>
                     <div className="w-2 h-2 bg-bronze-500 rounded-full animate-bounce delay-150"></div>
                   </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-salt-950 border-t border-salt-800">
            <form onSubmit={handleSend} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for advice (e.g., 'I have a round face and curly hair...')"
                className="flex-1 bg-salt-900 text-white placeholder-salt-500 border border-salt-700 rounded-xl px-4 py-3 focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 transition-all"
              />
              <Button type="submit" disabled={isLoading || !input.trim()} className="!px-4 !py-0 rounded-xl">
                <Send size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};