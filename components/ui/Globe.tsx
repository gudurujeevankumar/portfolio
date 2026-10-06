'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface GlobeProps {
  className?: string;
  size?: number;
  showDragHint?: boolean;
}

interface SpherePoint {
  x: number;
  y: number;
  z: number;
  baseSize: number;
  colorType: 'purple' | 'indigo' | 'cyan';
  isHub?: boolean;
  label?: string;
}

export default function Globe({ className = '', size = 180, showDragHint = false }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0.22, y: 1.35 }); // Oriented toward South Asia / Bengaluru
  const targetRotation = useRef({ x: 0.22, y: 1.35 });
  const isVisible = useRef(true);

  // Generate 200–260 spherical dots following natural spherical curvature
  const points = useRef<SpherePoint[]>([]);

  useEffect(() => {
    const pts: SpherePoint[] = [];
    const TOTAL_DOTS = 380;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399963

    // 1. Fibonacci Sphere Lattice (homogeneous spherical distribution)
    for (let i = 0; i < TOTAL_DOTS; i++) {
      const y = 1 - (i / (TOTAL_DOTS - 1)) * 2; // from +1 to -1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Deterministic size and color variations
      const sizeMod = 0.85 + 0.35 * Math.sin(i * 11.3);
      const colorMod = i % 7;
      let colorType: 'purple' | 'indigo' | 'cyan' = 'purple';
      if (colorMod === 1 || colorMod === 4) {
        colorType = 'indigo';
      } else if (colorMod === 6) {
        colorType = 'cyan';
      }

      pts.push({
        x,
        y,
        z,
        baseSize: 1.35 * sizeMod,
        colorType,
      });
    }

    // 2. Verified Global Collaboration Hubs
    const latLonToVector = (lat: number, lon: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        x: -(Math.sin(phi) * Math.cos(theta)),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
      };
    };

    const hubs: SpherePoint[] = [
      {
        ...latLonToVector(12.9716, 77.5946),
        baseSize: 2.8,
        colorType: 'purple',
        isHub: true,
        label: 'Bengaluru (HQ)',
      },
      {
        ...latLonToVector(37.7749, -122.4194),
        baseSize: 2.2,
        colorType: 'cyan',
        isHub: true,
        label: 'San Francisco',
      },
      {
        ...latLonToVector(51.5074, -0.1278),
        baseSize: 2.0,
        colorType: 'indigo',
        isHub: true,
        label: 'London',
      },
      {
        ...latLonToVector(35.6762, 139.6503),
        baseSize: 2.0,
        colorType: 'indigo',
        isHub: true,
        label: 'Tokyo',
      },
      {
        ...latLonToVector(1.3521, 103.8198),
        baseSize: 2.0,
        colorType: 'cyan',
        isHub: true,
        label: 'Singapore',
      },
      {
        ...latLonToVector(47.3769, 8.5417),
        baseSize: 1.8,
        colorType: 'purple',
        isHub: true,
        label: 'Zurich',
      },
      {
        ...latLonToVector(-33.8688, 151.2093),
        baseSize: 1.8,
        colorType: 'indigo',
        isHub: true,
        label: 'Sydney',
      },
    ];

    points.current = [...pts, ...hubs];
  }, []);

  // Viewport intersection observer to avoid unnecessary GPU draw calls
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Helper: Draw curved 3D latitude ellipse
  const drawLatitudeCurve = (
    ctx: CanvasRenderingContext2D,
    latDeg: number,
    cx: number,
    cy: number,
    radius: number,
    cosX: number,
    sinX: number,
    cosY: number,
    sinY: number,
    color: string
  ) => {
    const latRad = (latDeg * Math.PI) / 180;
    const rCircle = Math.cos(latRad);
    const yCircle = Math.sin(latRad);
    const segments = 40;

    ctx.beginPath();
    let drawing = false;

    for (let i = 0; i <= segments; i++) {
      const phi = (i / segments) * Math.PI * 2;
      const x0 = rCircle * Math.cos(phi);
      const z0 = rCircle * Math.sin(phi);

      // Rotate Y
      const x1 = x0 * cosY + z0 * sinY;
      const y1 = yCircle;
      const z1 = -x0 * sinY + z0 * cosY;

      // Rotate X
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      if (z2 > -0.05) {
        const px = cx + x2 * radius;
        const py = cy + y2 * radius;
        if (!drawing) {
          ctx.moveTo(px, py);
          drawing = true;
        } else {
          ctx.lineTo(px, py);
        }
      } else {
        drawing = false;
      }
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = 0.9;
    ctx.stroke();
  };

  // Helper: Draw curved 3D longitude meridian arc
  const drawLongitudeCurve = (
    ctx: CanvasRenderingContext2D,
    lonDeg: number,
    cx: number,
    cy: number,
    radius: number,
    cosX: number,
    sinX: number,
    cosY: number,
    sinY: number,
    color: string
  ) => {
    const lonRad = (lonDeg * Math.PI) / 180;
    const segments = 40;

    ctx.beginPath();
    let drawing = false;

    for (let i = 0; i <= segments; i++) {
      const theta = -Math.PI / 2 + (i / segments) * Math.PI;
      const rTheta = Math.cos(theta);
      const y0 = Math.sin(theta);
      const x0 = rTheta * Math.sin(lonRad);
      const z0 = rTheta * Math.cos(lonRad);

      // Rotate Y
      const x1 = x0 * cosY + z0 * sinY;
      const y1 = y0;
      const z1 = -x0 * sinY + z0 * cosY;

      // Rotate X
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      if (z2 > -0.05) {
        const px = cx + x2 * radius;
        const py = cy + y2 * radius;
        if (!drawing) {
          ctx.moveTo(px, py);
          drawing = true;
        } else {
          ctx.lineTo(px, py);
        }
      } else {
        drawing = false;
      }
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = 0.9;
    ctx.stroke();
  };

  // Canvas render loop
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = document.documentElement.classList.contains('dark');

    // Continuous smooth auto-rotation
    if (!isDragging) {
      targetRotation.current.y += 0.0028;
    }

    // Inertial smoothing
    rotation.current.x += (targetRotation.current.x - rotation.current.x) * 0.09;
    rotation.current.y += (targetRotation.current.y - rotation.current.y) * 0.09;

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const radius = Math.min(width, height) * 0.42;
    const cx = width / 2;
    const cy = height / 2;

    ctx.clearRect(0, 0, width, height);

    // 1. Subtle Atmospheric Radial Glow Behind Globe
    const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.35);
    if (isDark) {
      bgGlow.addColorStop(0, 'rgba(124, 58, 237, 0.14)');
      bgGlow.addColorStop(0.45, 'rgba(79, 124, 255, 0.06)');
      bgGlow.addColorStop(0.75, 'rgba(0, 0, 0, 0)');
    } else {
      bgGlow.addColorStop(0, 'rgba(124, 58, 237, 0.12)');
      bgGlow.addColorStop(0.45, 'rgba(79, 124, 255, 0.05)');
      bgGlow.addColorStop(0.75, 'rgba(255, 255, 255, 0)');
    }
    ctx.fillStyle = bgGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
    ctx.fill();

    // 2. Smooth Glass/Hemisphere Boundary & Gradient Fill
    const sphereGrad = ctx.createRadialGradient(
      cx - radius * 0.28,
      cy - radius * 0.28,
      radius * 0.08,
      cx,
      cy,
      radius
    );
    if (isDark) {
      sphereGrad.addColorStop(0, 'rgba(124, 58, 237, 0.09)');
      sphereGrad.addColorStop(0.65, 'rgba(17, 20, 30, 0.45)');
      sphereGrad.addColorStop(1, 'rgba(9, 11, 17, 0.70)');
    } else {
      sphereGrad.addColorStop(0, 'rgba(245, 243, 255, 0.75)');
      sphereGrad.addColorStop(0.65, 'rgba(238, 242, 255, 0.42)');
      sphereGrad.addColorStop(1, 'rgba(224, 231, 255, 0.22)');
    }
    ctx.fillStyle = sphereGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    // Subtle Outer Circular Boundary Line
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = isDark ? 'rgba(168, 85, 247, 0.18)' : 'rgba(124, 58, 237, 0.15)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 3. Trigonometric Rotation Matrix
    const rotX = rotation.current.x;
    const rotY = rotation.current.y;
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    // 4. Subtle Globe Latitude and Longitude Curves
    const gridLineColor = isDark ? 'rgba(168, 85, 247, 0.14)' : 'rgba(124, 58, 237, 0.11)';
    const gridEquatorColor = isDark ? 'rgba(79, 124, 255, 0.16)' : 'rgba(79, 124, 255, 0.13)';

    // 4 Curved Latitude Lines
    drawLatitudeCurve(ctx, 42, cx, cy, radius, cosX, sinX, cosY, sinY, gridLineColor);
    drawLatitudeCurve(ctx, 18, cx, cy, radius, cosX, sinX, cosY, sinY, gridLineColor);
    drawLatitudeCurve(ctx, 0, cx, cy, radius, cosX, sinX, cosY, sinY, gridEquatorColor);
    drawLatitudeCurve(ctx, -24, cx, cy, radius, cosX, sinX, cosY, sinY, gridLineColor);
    drawLatitudeCurve(ctx, -46, cx, cy, radius, cosX, sinX, cosY, sinY, gridLineColor);

    // 3 Curved Longitude Lines
    drawLongitudeCurve(ctx, 0, cx, cy, radius, cosX, sinX, cosY, sinY, gridLineColor);
    drawLongitudeCurve(ctx, 65, cx, cy, radius, cosX, sinX, cosY, sinY, gridLineColor);
    drawLongitudeCurve(ctx, 130, cx, cy, radius, cosX, sinX, cosY, sinY, gridLineColor);

    // 5. Projected Hubs for Collaboration Arcs
    const visibleHubs: Array<{ x: number; y: number; z: number; label?: string }> = [];

    // 6. Render Spherical Dot Matrix with Depth Curvature & Edge Fading
    points.current.forEach((pt) => {
      // Rotate around Y
      const x1 = pt.x * cosY + pt.z * sinY;
      const y1 = pt.y;
      const z1 = -pt.x * sinY + pt.z * cosY;

      // Rotate around X
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      // Check depth visibility (front hemisphere + subtle peripheral edge wrap)
      if (z2 < -0.12) return;

      const isFront = z2 > 0;
      const px = cx + x2 * radius;
      const py = cy + y2 * radius;

      // Density & Edge Falloff: Center is bright & dense, outer edges soften gracefully
      const centerFactor = Math.max(0, Math.min(1, (z2 + 0.12) / 1.12));
      const edgeFade = Math.pow(centerFactor, 1.1);
      const alpha = isFront ? 0.22 + edgeFade * 0.72 : 0.08;

      // Dot size scales with 3D spherical depth
      const perspectiveScale = 0.75 + 0.45 * Math.max(0, z2);
      const dotR = pt.baseSize * perspectiveScale;

      if (pt.isHub) {
        if (isFront) {
          visibleHubs.push({ x: px, y: py, z: z2, label: pt.label });

          const isHQ = pt.label?.includes('Bengaluru');

          // HQ Radar Ripple
          if (isHQ) {
            const time = Date.now() * 0.0035;
            const rippleR = dotR + ((Math.sin(time) + 1) / 2) * 5.5;
            ctx.beginPath();
            ctx.arc(px, py, rippleR, 0, Math.PI * 2);
            ctx.strokeStyle = isDark ? 'rgba(168, 85, 247, 0.45)' : 'rgba(124, 58, 237, 0.40)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Core Hub Dot
          ctx.beginPath();
          ctx.arc(px, py, isHQ ? 4.2 : 3.0, 0, Math.PI * 2);
          if (isHQ) {
            ctx.fillStyle = isDark ? '#A855F7' : '#7C3AED';
          } else if (pt.colorType === 'cyan') {
            ctx.fillStyle = isDark ? '#22D3EE' : '#06B6D4';
          } else {
            ctx.fillStyle = isDark ? '#818CF8' : '#4F46E5';
          }
          ctx.fill();
        }
      } else {
        // Standard Spherical Lattice Dot
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.65, dotR), 0, Math.PI * 2);

        if (pt.colorType === 'purple') {
          ctx.fillStyle = isDark
            ? `rgba(192, 132, 252, ${alpha * 0.88})`
            : `rgba(124, 58, 237, ${alpha * 0.82})`;
        } else if (pt.colorType === 'indigo') {
          ctx.fillStyle = isDark
            ? `rgba(147, 197, 253, ${alpha * 0.85})`
            : `rgba(79, 124, 255, ${alpha * 0.78})`;
        } else {
          ctx.fillStyle = isDark
            ? `rgba(103, 232, 249, ${alpha * 0.90})`
            : `rgba(6, 182, 212, ${alpha * 0.82})`;
        }
        ctx.fill();
      }
    });

    // 7. Global Collaboration Arcs (Bengaluru -> International Tech Hubs)
    if (visibleHubs.length > 1) {
      const hq = visibleHubs.find((h) => h.label?.includes('Bengaluru')) || visibleHubs[0];

      visibleHubs.forEach((hub) => {
        if (hub === hq) return;

        ctx.beginPath();
        ctx.moveTo(hq.x, hq.y);

        const midX = (hq.x + hub.x) / 2;
        const midY = (hq.y + hub.y) / 2;
        const dist = Math.hypot(hub.x - hq.x, hub.y - hq.y);
        const curveOffset = Math.min(26, dist * 0.22);
        const cpX = midX;
        const cpY = midY - curveOffset;

        ctx.quadraticCurveTo(cpX, cpY, hub.x, hub.y);
        ctx.strokeStyle = isDark ? 'rgba(168, 85, 247, 0.28)' : 'rgba(124, 58, 237, 0.22)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      });
    }
  }, [isDragging]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    let frameId: number;
    const tick = () => {
      render();
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [render, size]);

  // Pointer drag interaction handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;

    targetRotation.current.y += dx * 0.007;
    targetRotation.current.x = Math.max(
      -Math.PI / 2.6,
      Math.min(Math.PI / 2.6, targetRotation.current.x + dy * 0.007)
    );

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Interactive 3D representation of global connectivity and developer collaboration"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        style={{ width: `${size}px`, height: `${size}px` }}
      />
      {showDragHint && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] font-mono text-muted-foreground/75 tracking-wider uppercase bg-surface/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-border-subtle shadow-2xs">
          Drag to rotate
        </div>
      )}
    </div>
  );
}
