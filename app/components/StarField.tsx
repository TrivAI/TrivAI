"use client";
import React, { useRef, useEffect, useLayoutEffect } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  direction: number;
  trail: [number, number][];
}

const Starfield: React.FC<{style: string;}> = ( {style} ) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fov = 150;
  const viewZ = 150;

  useEffect(() => {
    let viewWidth : number = canvasRef.current!.parentElement!.offsetWidth;
    let viewHeight : number = canvasRef.current!.parentElement!.offsetHeight;
    
    // console.log(parentRef.current?.parentElement?.offsetWidth);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];

    const initStars = () => {
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * viewWidth - viewWidth / 2;
        const y = Math.random() * viewHeight - viewHeight / 2;
        const z = Math.random() * viewZ;
        const size = Math.random() * 1.1;
        const speed = Math.random() * 0.003;
        const direction = Math.random() < 0.5 ? -1 : 1;
        const trail: [number, number][] = [];

        stars.push({ x, y, z, size, speed, direction, trail });
      }
    };

    const drawStar = (star: Star) => {
      const sx = (star.x * fov) / star.z + viewWidth / 2;
      const sy = (star.y * fov) / star.z + viewHeight / 2;
      const size = (star.size * fov) / star.z;
      ctx.beginPath();
      ctx.arc(sx, sy, size, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      star.trail.push([sx, sy]);
      while (star.trail.length > 10) {
        star.trail.shift();
      }

      ctx.beginPath();
      ctx.moveTo(star.trail[0][0], star.trail[0][1]);
      for (let i = 1; i < star.trail.length; i++) {
        const [x, y] = star.trail[i];
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = size / 2;
      ctx.lineCap = 'round';
      ctx.stroke();
    };

    const updateStars = () => {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.z -= star.speed * viewZ;
        if (star.z < 1) {
          star.z = viewZ;
          star.x = Math.random() * viewWidth - viewWidth / 2;
          star.y = Math.random() * viewHeight - viewHeight / 2;
          star.direction = Math.random() < 0.5 ? -1 : 1;
          star.trail = [];
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, viewWidth, viewHeight);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += star.speed * star.direction;
        if (star.direction === -1 && star.x < -viewWidth / 2) {
          star.x = viewWidth / 2
        } else if (star.direction === 1 && star.x > viewWidth / 2) {
          star.x = -viewWidth / 2;
        }
        drawStar(star);
      }
      updateStars();
    };

    initStars();
    animate();

    return () => {
      stars = [];
    };
  }, []);

  return (<canvas className={style} ref={canvasRef} width={1600} height={75}/> );
};

export default Starfield;