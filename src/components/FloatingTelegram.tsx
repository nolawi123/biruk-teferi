import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingTelegram() {
  return (
    <a
      href="https://t.me/BirukTeferiHQ" // Replace with actual telegram username
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#229ED9] text-white p-4 rounded-full shadow-lg hover:bg-[#1C82B3] hover:scale-105 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on Telegram"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
