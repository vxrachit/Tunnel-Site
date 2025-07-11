import { useEffect, useRef } from "react";

const SparkleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const colors = ["#60a5fa", "#c084fc", "#34d399", "#facc15", "#f472b6", "#818cf8"];
    const sparkCount = 100;

    const sparkles = Array.from({ length: sparkCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseRadius: Math.random() * 1.5 + 0.7,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      alpha: Math.random() * 0.5 + 0.3,
      flickerPhase: Math.random() * 100,
      flickerSpeed: Math.random() * 0.2 + 0.05,
      crackleTimer: Math.floor(Math.random() * 200),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of sparkles) {
        // Motion & jitter
        s.x += s.dx + (Math.random() - 0.5) * 0.3;
        s.y += s.dy + (Math.random() - 0.5) * 0.3;

        // Wrap around
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Flicker effect
        s.flickerPhase += s.flickerSpeed;
        const flicker = Math.abs(Math.sin(s.flickerPhase)) * s.alpha;

        // Crackle burst (randomized)
        s.crackleTimer--;
        if (s.crackleTimer <= 0) {
          s.crackleTimer = Math.floor(Math.random() * 200 + 50);
          s.alpha = Math.random() * 0.7 + 0.4;
        }

        // Draw sparkle
        const radius = s.baseRadius + Math.random() * 0.4;

        ctx.beginPath();
        ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = flicker;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 12 + Math.random() * 6;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default SparkleCanvas;
