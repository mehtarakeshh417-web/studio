"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, ZoomIn } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AccessibilityToolbar() {
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}rem`;
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev * 1.1, 1.5));
  };
  
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={increaseFontSize} aria-label="Increase font size">
        <ZoomIn className="h-5 w-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Select language">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem disabled>Español (coming soon)</DropdownMenuItem>
          <DropdownMenuItem disabled>Français (coming soon)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
