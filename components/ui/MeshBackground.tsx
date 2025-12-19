'use client';

import React, { useEffect, useRef } from 'react';

const MeshBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration
        const particleCount = 60;
        const connectionDistance = 150;
        const rotationSpeed = 0.001;
        const focalLength = 400;

        let width = 0;
        let height = 0;
        let angleY = 0;
        let angleX = 0;

        // Define class BEFORE using it in particles array type
        class Particle {
            x: number;
            y: number;
            z: number;
            baseX: number;
            baseY: number;
            baseZ: number;

            constructor() {
                // Random position in a 3D bounding box
                this.baseX = (Math.random() - 0.5) * width * 1.5;
                this.baseY = (Math.random() - 0.5) * height * 1.5;
                this.baseZ = (Math.random() - 0.5) * 800; // Deep Z space

                this.x = this.baseX;
                this.y = this.baseY;
                this.z = this.baseZ;
            }

            rotate() {
                // Rotate around Y axis
                const cosY = Math.cos(angleY);
                const sinY = Math.sin(angleY);
                let x1 = this.baseX * cosY - this.baseZ * sinY;
                let z1 = this.baseZ * cosY + this.baseX * sinY;

                // Rotate around X axis (subtle tilt)
                const cosX = Math.cos(angleX);
                const sinX = Math.sin(angleX);
                let y1 = this.baseY * cosX - z1 * sinX;
                let z2 = z1 * cosX + this.baseY * sinX;

                this.x = x1;
                this.y = y1;
                this.z = z2;
            }

            project() {
                // Perspective projection
                const scale = focalLength / (focalLength + this.z + 400); // 400 pushback to avoid clipping
                return {
                    x: this.x * scale + width / 2,
                    y: this.y * scale + height / 2,
                    scale: scale,
                    opacity: Math.max(0, Math.min(1, (scale * 0.8))) // Fade out if too deep/close
                };
            }
        }

        let particles: Particle[] = [];

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update rotation
            angleY += rotationSpeed;
            angleX += rotationSpeed * 0.5;

            // Update and Project all particles
            const projectedPoints = particles.map(p => {
                p.rotate();
                return p.project();
            });

            // Draw connections first (behind dots)
            ctx.lineWidth = 1;

            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const p1 = projectedPoints[i];
                    const p2 = projectedPoints[j];

                    if (!p1 || !p2) continue;

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.15 * p1.opacity; // Very subtle lines
                        ctx.strokeStyle = `rgba(106, 76, 147, ${opacity})`; // Signature purple tint
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            projectedPoints.forEach(p => {
                ctx.fillStyle = `rgba(106, 76, 147, ${p.opacity})`; // Signature purple
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(draw);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Init
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply"
            style={{ filter: 'blur(0px)' }}
        />
    );
};

export default MeshBackground;
