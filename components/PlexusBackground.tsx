'use client';

import { useEffect, useRef } from 'react';

type Dot = { x: number; y: number; vx: number; vy: number };

export default function PlexusBackground({
                                             dotColor = '255,255,255',
                                             lineColor = '255,255,255',
                                             className = '',
                                         }: Readonly<{ dotColor?: string; lineColor?: string; className?: string }>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        let w = 0;
        let h = 0;
        let dots: Dot[] = [];
        let frame = 0;
        const LINK = 180; // max distance for a line between two dots

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            w = canvas.clientWidth;
            h = canvas.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(160, Math.floor((w * h) / 8000));
            dots = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            for (const d of dots) {
                d.x += d.vx;
                d.y += d.vy;
                if (d.x < 0 || d.x > w) d.vx *= -1;
                if (d.y < 0 || d.y > h) d.vy *= -1;
            }

            ctx.lineWidth = 1;
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
                    if (dist < LINK) {
                        ctx.strokeStyle = `rgba(${lineColor},${0.5 * (1 - dist / LINK)})`;
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        ctx.stroke();
                    }
                }
            }

            ctx.fillStyle = `rgba(${dotColor},0.9)`;
            for (const d of dots) {
                ctx.beginPath();
                ctx.arc(d.x, d.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            frame = requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', resize);
        };
    }, [dotColor, lineColor]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 h-full w-full ${className}`}
        />
    );
}