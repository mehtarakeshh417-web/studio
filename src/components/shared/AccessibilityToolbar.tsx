"use client";

import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function AccessibilityToolbar() {
  return (
    <div className="flex items-center gap-2">
      <div id="google_translate_element" />
    </div>
  );
}
