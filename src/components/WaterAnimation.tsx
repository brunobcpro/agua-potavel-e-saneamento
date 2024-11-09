// src/components/WaterAnimation.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';

const WaterAnimation: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Um plano básico sem animação complexa */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#00b4d8" />
      </mesh>
    </Canvas>
  );
};

export default WaterAnimation;
