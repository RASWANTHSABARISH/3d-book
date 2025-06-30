// components/Projects.jsx

const projects = [
    {
      title: "3D Book Portfolio",
      image: "/projects/book.png", // put this image in public/projects
      description: "Interactive 3D portfolio using Three.js and React.",
    },
    {
      title: "E-Agri Farmers",
      image: "/projects/agri.png",
      description: "Online marketplace for modern agriculture tools.",
    },
    {
      title: "BIPV calculation and assessment",
      image: "/projects/poster.png",
      description: "A national level hackathon project.",
    },
    // Add more projects here
  ];
  
  export const Projects = () => {
    return (
      <section className="w-full bg-black py-20 px-6 text-white">
        <h2 className="text-4xl font-bold mb-10 text-center text-red-500">Projects</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] bg-zinc-900 rounded-xl p-4 shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400 transition-all duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-red-400">{proj.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };