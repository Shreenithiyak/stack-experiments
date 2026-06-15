import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let animId;
    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      animId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const grow = () => {
      glowRef.current && (glowRef.current.style.width = glowRef.current.style.height = '40px');
      ringRef.current && (ringRef.current.style.width = ringRef.current.style.height = '60px');
    };
    const shrink = () => {
      glowRef.current && (glowRef.current.style.width = glowRef.current.style.height = '18px');
      ringRef.current && (ringRef.current.style.width = ringRef.current.style.height = '42px');
    };
    document.querySelectorAll('a,button').forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Glow dot */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: 18, height: 18, borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(34,211,238,0.3) 60%, transparent 80%)',
          mixBlendMode: 'screen',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: 42, height: 42, borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1.5px solid rgba(168,85,247,0.45)',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
    </>
  );
}
