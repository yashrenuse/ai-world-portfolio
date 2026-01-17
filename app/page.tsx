"use client";

import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />

        <Text
  fontSize={0.55}
  position={[0, 0.8, 0]}
  color="#e5e7eb"
>
Welcome to Yash’s AI World 🚀

</Text>

        
      </Canvas>
    </div>
  );
}
