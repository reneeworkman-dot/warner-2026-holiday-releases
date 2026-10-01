import React, { useEffect, useRef, useState } from 'react';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  swing: number;
  swingStep: number;
  opacity: number;
  type: 'round' | 'star' | 'crystal';
}

export const SnowfallCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snowIntensity, setSnowIntensity] = useState<'gentle' | 'flurry'>('gentle');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create snowflakes
    const flakeCount = snowIntensity === 'gentle' ? 70 : 130;
    const flakes: Snowflake[] = [];

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3.5 + 1.2,
        speed: Math.random() * 1.2 + 0.6,
        wind: Math.random() * 0.6 - 0.3,
        swing: 0,
        swingStep: Math.random() * 0.02 + 0.01,
        opacity: Math.random() * 0.7 + 0.3,
        type: i % 4 === 0 ? 'crystal' : i % 3 === 0 ? 'star' : 'round',
      });
    }

    const drawSnowflake = (flake: Snowflake) => {
      ctx.save();
      ctx.translate(flake.x, flake.y);
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.strokeStyle = `rgba(255, 255, 255, ${flake.opacity * 0.8})`;

      if (flake.type === 'round') {
        ctx.beginPath();
        ctx.arc(0, 0, flake.radius, 0, Math.PI * 2);
        ctx.fill();
      } else if (flake.type === 'star') {
        // Cute 4-point twinkling star
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-flake.radius * 1.5, 0);
        ctx.lineTo(flake.radius * 1.5, 0);
        ctx.moveTo(0, -flake.radius * 1.5);
        ctx.lineTo(0, flake.radius * 1.5);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, flake.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Delicate 6-branch mini snowflake crystal
        ctx.lineWidth = 1;
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          ctx.moveTo(-flake.radius * 1.8, 0);
          ctx.lineTo(flake.radius * 1.8, 0);
          ctx.stroke();
          ctx.rotate(Math.PI / 3);
        }
      }

      ctx.restore();
    };

    const updateAndRender = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];
        flake.swing += flake.swingStep;
        flake.y += flake.speed;
        flake.x += Math.sin(flake.swing) * 0.8 + flake.wind;

        // Wrap around
        if (flake.y > height + 10) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }
        if (flake.x > width + 10) {
          flake.x = -10;
        } else if (flake.x < -10) {
          flake.x = width + 10;
        }

        drawSnowflake(flake);
      }

      animationFrameId = requestAnimationFrame(updateAndRender);
    };

    updateAndRender();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [snowIntensity]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-30"
        aria-hidden="true"
      />
      {/* Floating snow intensity toggle */}
      <button
        onClick={() => setSnowIntensity(s => (s === 'gentle' ? 'flurry' : 'gentle'))}
        className="fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-full bg-rose-900/80 hover:bg-rose-800 text-white/90 border border-pink-400/40 backdrop-blur-md shadow-lg text-[11px] font-bold flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        title="Toggle snowfall intensity"
      >
        <span>❄️</span>
        <span className="hidden sm:inline">Snow:</span>
        <span className="text-pink-200 capitalize">{snowIntensity}</span>
      </button>
    </>
  );
};
