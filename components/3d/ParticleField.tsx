"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 500 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Gold to white gradient
      const t = Math.random();
      colors[i * 3] = 0.93 + t * 0.07; // R
      colors[i * 3 + 1] = 0.72 + t * 0.28; // G
      colors[i * 3 + 2] = 0.27 + t * 0.73; // B
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingRing({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      ringRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={ringRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshBasicMaterial color="#eeb844" transparent opacity={0.6} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <Particles count={800} />
        <FloatingRing position={[-2, 0, -2]} scale={1.5} />
        <FloatingRing position={[2, 1, -3]} scale={1} />
        <FloatingRing position={[0, -1.5, -1]} scale={0.8} />
      </Canvas>
    </div>
  );
}
