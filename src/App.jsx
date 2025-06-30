// src/App.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { UI } from "./components/UI";
import { Experience } from "./components/Experience"; // Old Experience.jsx
import { WorkExp } from "./components/WorkExp"; // New WorkExp.jsx
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.6, 2.5, 3], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>

      {/* Projects Section */}
      <Projects />

      {/* Work Experience Section (new) */}
      <WorkExp />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;