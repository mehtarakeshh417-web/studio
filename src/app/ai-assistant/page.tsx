'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Send, Loader } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { askHealthAssistant } from '@/ai/flows/health-assistant-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Message = {
  sender: 'user' | 'assistant';
  text: string;
};

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-home');

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await askHealthAssistant({ query: input });
      const assistantMessage: Message = { sender: 'assistant', text: result.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        sender: 'assistant',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('AI Assistant Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-10rem)] flex flex-col">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Background"
          fill
          className="object-cover z-0"
          data-ai-hint="medical background"
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl bg-card/80 rounded-2xl shadow-2xl flex flex-col h-[80vh] border"
        >
          <header className="p-4 border-b flex items-center gap-4">
            <div className="p-2 bg-primary/20 rounded-full">
                <Bot className="w-8 h-8 text-primary" />
            </div>
            <div>
                <h1 className="text-2xl font-bold font-headline text-foreground">
                AI Health Assistant
                </h1>
                <p className="text-muted-foreground">How can I help you today?</p>
            </div>
          </header>

          <main className="flex-grow p-6 overflow-y-auto space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'assistant' && (
                    <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-md rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted rounded-bl-none'
                    }`}
                  >
                    <div className="prose prose-sm max-w-none text-foreground">
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                    </div>
                  </div>
                   {message.sender === 'user' && (
                    <div className="p-2 bg-secondary rounded-full flex-shrink-0">
                      <User className="w-6 h-6 text-secondary-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-3 justify-start"
                >
                    <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <div className="max-w-md rounded-2xl px-4 py-3 bg-muted rounded-bl-none flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-dot-flashing [animation-delay:0s]" />
                        <span className="w-2 h-2 bg-primary rounded-full animate-dot-flashing [animation-delay:0.2s]" />
                        <span className="w-2 h-2 bg-primary rounded-full animate-dot-flashing [animation-delay:0.4s]" />
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          <footer className="p-4 border-t">
            <div className="relative">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a health-related question..."
                className="pr-12 h-12 text-base"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9"
                aria-label="Send message"
              >
                {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </div>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
