import React from 'react';

export default function FloatingChat() {
  return (
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
        chat
      </span>
    </button>
  );
}
