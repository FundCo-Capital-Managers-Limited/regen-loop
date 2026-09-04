"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makeBubbleTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  grad.addColorStop(0, "rgba(255,255,255,0.9)");
  grad.addColorStop(0.6, "rgba(255,255,255,0.25)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const COUNT = 160;
    const BOUND_X = 9;
    const BOUND_Y = 6;
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const sizes = new Float32Array(COUNT);
    const drift = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * BOUND_X * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * BOUND_Y * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      speeds[i] = 0.25 + Math.random() * 0.55;
      sizes[i] = 0.12 + Math.random() * 0.35;
      drift[i] = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const texture = makeBubbleTexture();
    const mat = new THREE.PointsMaterial({
      size: 0.5,
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xe8a33d,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let frameId: number;
    const startTime = performance.now();

    function animate() {
      const t = (performance.now() - startTime) / 1000;
      if (!prefersReducedMotion) {
        const pos = geo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < COUNT; i++) {
          let y = pos.getY(i) + speeds[i] * 0.012;
          if (y > BOUND_Y) y = -BOUND_Y;
          const x = pos.getX(i) + Math.sin(t * 0.6 + drift[i]) * 0.003;
          pos.setY(i, y);
          pos.setX(i, x);
        }
        pos.needsUpdate = true;
        points.rotation.y = Math.sin(t * 0.05) * 0.1;
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      texture.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}
