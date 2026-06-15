import { useEffect, useRef, useState } from 'react';

export default function TypingText({ texts = [], className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    if (!texts.length) return;
    let timer;
    function tick() {
      const phrase = texts[phraseIdx.current];
      if (!deleting.current) {
        setDisplayed(phrase.substring(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === phrase.length) {
          deleting.current = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        setDisplayed(phrase.substring(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % texts.length;
        }
      }
      timer = setTimeout(tick, deleting.current ? 50 : 90);
    }
    timer = setTimeout(tick, 90);
    return () => clearTimeout(timer);
  }, [texts]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse text-purple-400 ml-0.5">|</span>
    </span>
  );
}
