import React, { useEffect, useRef } from 'react';

export const SimpleSnow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const flakes = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.7 + 0.3,
      drift: Math.random() * 0.4 - 0.2,
      opacity: Math.random() * 0.5 + 0.25,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const f of flakes) {
        f.y += f.speed;
        f.x += f.drift;
        if (f.y > height) {
          f.y = -5;
          f.x = Math.random() * width;
        }
        if (f.x > width) f.x = 0;
        if (f.x < 0) f.x = width;

        ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};
