"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Wave() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  const { positions, originalPositions } = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    const positions = geometry.attributes.position.array as Float32Array;
    const originalPositions = new Float32Array(positions);
    return { positions, originalPositions };
  }, []);

  useFrame((state) => {
    if (geometryRef.current) {
      const positionAttribute = geometryRef.current.attributes.position;
      const positions = positionAttribute.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        positions[i + 2] = 
          Math.sin(x * 0.5 + state.clock.elapsedTime) * 0.3 +
          Math.sin(y * 0.5 + state.clock.elapsedTime * 0.8) * 0.3;
      }
      
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
      <planeGeometry ref={geometryRef} args={[20, 20, 50, 50]} />
      <meshStandardMaterial
        color="#eeb844"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function GlowingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.5;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color="#eeb844" />
    </mesh>
  );
}

export default function WaveGrid() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 3, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#eeb844" />
        <Wave />
        <GlowingSphere position={[-3, 0, 0]} />
        <GlowingSphere position={[0, 0.5, 2]} />
        <GlowingSphere position={[3, 0, -1]} />
        <GlowingSphere position={[-1.5, 1, 1]} />
        <GlowingSphere position={[2, -0.5, 0]} />
      </Canvas>
    </div>
  );
}
