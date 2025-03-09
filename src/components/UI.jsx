import { atom, useAtom } from "jotai";
import { useEffect } from "react";
const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC00993",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
 
  
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  // useEffect(() => {
  //   const audfo = new Audio("/audios/page-flip-01a.mp3"); // Correct variable name
  //   audfo.play(); // Correct usage of the variable name
  // }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10 text-white"
          href="#"
        >
          Raswanth
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Front" :  `${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back 
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none hidden ">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              yenna 
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              thokkadika
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              oruthan mattum
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Varuvaaney,
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Manikanum momsey
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              ada avanum 
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              inga
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Naandhaaneyy!🗿
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              yenna            
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              thokkadika
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              oruthan mattum
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
             Varuvaaney,
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Manikanum maamsey
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              ada avanum 
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              inga
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Naandhaaneyy!🗿
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
