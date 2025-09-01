// src/App.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { UI } from "./components/UI";
import { Experience } from "./components/Experience"; // Old Experience.jsx


function App() {
  return (
    <>
      
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.6, 2.5, 3], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>

      
    </>
  );
}

export default App;