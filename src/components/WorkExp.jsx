// src/components/WorkExp.jsx
import React from "react";

const WorkExp = () => {
  return (
    <section id="work-exp" className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-red-500">Work Experience</h2>
        <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg transition-transform hover:scale-[1.01]">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/digiplus-logo.png"
              alt="Digiplus Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold">Graphic Designer</h3>
              <p className="text-sm text-gray-400">Digiplus | Jan 2024 – Present</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Worked on creating digital content like posters, social media visuals, and marketing graphics. Utilized tools like Photoshop, Illustrator, and Figma to deliver high-impact designs aligned with brand identity. Collaborated closely with the content and development team to deliver consistent, on-brand visuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export { WorkExp };