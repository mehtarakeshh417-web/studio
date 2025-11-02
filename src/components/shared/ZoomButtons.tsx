'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { motion } from 'framer-motion';

const ZOOM_LEVELS = 10;
const MIN_ZOOM = 0.8; // 80%
const MAX_ZOOM = 1.5; // 150%

export function ZoomButtons() {
  // We initialize state to a value that can be rendered on the server without causing a mismatch.
  const [currentLevel, setCurrentLevel] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the initial render.
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // This effect also runs only on the client. We check isMounted to be sure.
    if (isMounted) {
      const step = (MAX_ZOOM - MIN_ZOOM) / (ZOOM_LEVELS - 1);
      const fontSize = MIN_ZOOM + (currentLevel * step);
      // Using 16 as the base font size for rem calculation
      document.documentElement.style.fontSize = `${16 * fontSize}px`;
    }
  }, [currentLevel, isMounted]);

  const zoomIn = () => {
    setCurrentLevel((prev) => Math.min(prev + 1, ZOOM_LEVELS - 1));
  };

  const zoomOut = () => {
    setCurrentLevel((prev) => Math.max(prev - 1, 0));
  };

  // By returning null until the component is mounted on the client, we avoid the hydration mismatch.
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div 
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
    >
      <Button variant="outline" size="icon" onClick={zoomIn} aria-label="Zoom In" disabled={currentLevel === ZOOM_LEVELS - 1}>
        <ZoomIn className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon" onClick={zoomOut} aria-label="Zoom Out" disabled={currentLevel === 0}>
        <ZoomOut className="h-5 w-5" />
      </Button>
    </motion.div>
  );
}
