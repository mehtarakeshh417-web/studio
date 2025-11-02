"use client";

import { Phone, MessageCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

export function FloatingActionButtons() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button asChild size="icon" className="rounded-full h-16 w-16 bg-purple-600 hover:bg-purple-700">
                <Link href="/ai-assistant" aria-label="AI Assistant">
                    <Bot className="h-8 w-8" />
                </Link>
            </Button>
        </motion.div>
         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button asChild size="icon" className="rounded-full h-16 w-16 bg-green-500 hover:bg-green-600">
                <Link href="https://wa.me/442012345678" target="_blank" aria-label="Chat on WhatsApp">
                <MessageCircle className="h-8 w-8" />
                </Link>
            </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button asChild size="icon" className="rounded-full h-16 w-16">
                <Link href="tel:02012345678" aria-label="Call Us">
                <Phone className="h-8 w-8" />
                </Link>
            </Button>
        </motion.div>
    </div>
  );
}
