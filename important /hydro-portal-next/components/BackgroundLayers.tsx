"use client";
import { useEffect, useRef } from "react";

/**
 * Stacks all background layers: gradients, grid floor, starfield canvas,
 * neural-network canvas, and scanline overlay. Fixed to the viewport.
 */
export default function BackgroundLayers() {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const neuralRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const stars = starsRef.current!;
    const sCtx = stars.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0;
    let starList: { x: number; y: number; z: number; s: number }[] = [];
    let raf = 0;

    const resize = () => {
      w = stars.width  = innerWidth * dpr;
      h = stars.height = innerHeight * dpr;
      stars.style.width  = innerWidth + "px";
      stars.style.height = innerHeight + "px";
      const n = Math.min(180, Math.floor(innerWidth / 8));
      starList = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.9 + 0.1,
        s: Math.random() * 1.4 + 0.3,
      }));
    };
    const tick = () => {
      sCtx.clearRect(0, 0, w, h);
      for (const s of starList) {
        s.y += s.z * 0.4;
        if (s.y > h) s.y = 0;
        const a = 0.35 + s.z * 0.6;
        sCtx.fillStyle = `rgba(${180 + Math.floor(s.z * 60)}, ${190 + Math.floor(s.z * 40)}, 255, ${a})`;
        sCtx.beginPath();
        sCtx.arc(s.x, s.y, s.s * dpr, 0, Math.PI * 2);
        sCtx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    resize(); tick();
    addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);

  useEffect(() => {
    const c = neuralRef.current!;
    const x = c.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    let raf = 0;

    const resize = () => {
      w = c.width  = innerWidth * dpr;
      h = c.height = innerHeight * dpr;
      c.style.width  = innerWidth + "px";
      c.style.height = innerHeight + "px";
      const n = Math.min(90, Math.floor(innerWidth / 16));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * dpr,
        vy: (Math.random() - 0.5) * 0.25 * dpr,
      }));
    };
    const tick = () => {
      x.clearRect(0, 0, w, h);
      for (const a of nodes) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
      }
      const max = (160 * dpr) ** 2;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < max) {
            const alpha = (1 - d2 / max) * 0.35;
            const g = x.createLinearGradient(a.x, a.y, b.x, b.y);
            g.addColorStop(0, `rgba(51,225,255,${alpha})`);
            g.addColorStop(1, `rgba(200,75,255,${alpha})`);
            x.strokeStyle = g; x.lineWidth = 0.6 * dpr;
            x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke();
          }
        }
      }
      for (const a of nodes) {
        x.fillStyle = "rgba(180,210,255,.55)";
        x.beginPath(); x.arc(a.x, a.y, 1.6 * dpr, 0, Math.PI * 2); x.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    resize(); tick();
    addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 700px at 18% -10%, rgba(58,125,255,.18), transparent 60%)," +
            "radial-gradient(1000px 700px at 90% 10%, rgba(200,75,255,.14), transparent 65%)," +
            "radial-gradient(900px 600px at 50% 110%, rgba(51,225,255,.10), transparent 60%)," +
            "linear-gradient(180deg,#03050c 0%,#05081a 60%,#04060f 100%)",
        }}
      />
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,160,255,.07) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(120,160,255,.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)",
        }}
      />
      <canvas ref={starsRef} className="fixed inset-0 -z-10 pointer-events-none" />
      <canvas ref={neuralRef} className="fixed inset-0 -z-10 pointer-events-none opacity-60" />
      <div
        className="fixed inset-0 -z-10 pointer-events-none mix-blend-overlay opacity-[.07]"
        style={{ background: "repeating-linear-gradient(0deg, rgba(255,255,255,.5) 0 1px, transparent 1px 3px)" }}
      />
    </>
  );
}
