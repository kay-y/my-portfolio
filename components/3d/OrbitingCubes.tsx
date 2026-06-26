"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function OrbitingCube({ 
  orbitRadius, 
  speed, 
  size, 
  offset,
  color 
}: { 
  orbitRadius: number; 
  speed: number; 
  size: number; 
  offset: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * speed + offset;
      meshRef.current.position.x = Math.cos(t) * orbitRadius;
      meshRef.current.position.z = Math.sin(t) * orbitRadius;
      meshRef.current.position.y = Math.sin(t * 2) * 0.5;
      meshRef.current.rotation.x = t;
      meshRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[size, size, size]} radius={0.05} smoothness={4}>
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1}
      />
    </RoundedBox>
  );
}

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.8, 2]} />
      <meshStandardMaterial
        color="#eeb844"
        metalness={0.8}
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
}

function OrbitRing({ radius }: { radius: number }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color="#eeb844" transparent opacity={0.2} />
    </mesh>
  );
}

export default function OrbitingCubes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#eeb844" />
        
        <CentralSphere />
        
        <OrbitRing radius={2} />
        <OrbitRing radius={3} />
        <OrbitRing radius={4} />
        
        <OrbitingCube orbitRadius={2} speed={0.8} size={0.3} offset={0} color="#eeb844" />
        <OrbitingCube orbitRadius={2} speed={0.8} size={0.25} offset={Math.PI} color="#ffffff" />
        
        <OrbitingCube orbitRadius={3} speed={0.5} size={0.35} offset={0.5} color="#eeb844" />
        <OrbitingCube orbitRadius={3} speed={0.5} size={0.3} offset={Math.PI + 0.5} color="#b3b2b1" />
        <OrbitingCube orbitRadius={3} speed={0.5} size={0.25} offset={Math.PI / 2} color="#ffffff" />
        
        <OrbitingCube orbitRadius={4} speed={0.3} size={0.4} offset={1} color="#eeb844" />
        <OrbitingCube orbitRadius={4} speed={0.3} size={0.35} offset={Math.PI + 1} color="#ffffff" />
      </Canvas>
    </div>
  );
}
