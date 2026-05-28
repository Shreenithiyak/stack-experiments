// src/utils/TypingText.jsx
// A simple typing animation component
// Shows text being typed character by character, then erases and moves to next string
import { useEffect, useState } from 'react';

export default function TypingText({ texts = [], speed = 100, pause = 2000 }) {
  const [textIndex, setTextIndex] = useState(0);   // which string we're on
  const [charIndex, setCharIndex] = useState(0);    // which character we're at
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      // Typing forward
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
      } else {
        // Finished typing — pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // Deleting backward
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      } else {
        // Finished deleting — move to next string
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  const currentText = texts[textIndex] || '';
  const displayed = currentText.slice(0, charIndex);

  return (
    <span>
      {displayed}
      {/* Blinking cursor */}
      <span className="animate-pulse">|</span>
    </span>
  );
}
