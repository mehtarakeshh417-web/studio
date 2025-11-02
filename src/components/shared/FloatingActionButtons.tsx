"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FloatingActionButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <Button asChild size="icon" className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600">
        <Link href="https://wa.me/442012345678" target="_blank" aria-label="Chat on WhatsApp">
          <MessageCircle className="h-7 w-7" />
        </Link>
      </Button>
      <Button asChild size="icon" className="rounded-full h-14 w-14">
        <Link href="tel:02012345678" aria-label="Call Us">
          <Phone className="h-7 w-7" />
        </Link>
      </Button>
    </div>
  );
}
