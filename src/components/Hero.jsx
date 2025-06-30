import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#ff0000" },
            links: {
              color: "#ff0000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              outModes: { default: "bounce" },
            },
            number: { value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
      />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold">Raswanth Sabarish</h1>
        <p className="text-lg mt-2">Developer & Designer</p>
      </div>
    </section>
  );
};

export { Hero };