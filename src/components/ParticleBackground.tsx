import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars, Float } from "@react-three/drei";

export const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <ambientLight intensity={0.5} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
