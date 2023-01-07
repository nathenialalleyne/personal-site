import { useEffect, useState } from "react";
import "../style.css";

export function Top() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const scrollTo = () => {
    const scroll = document.getElementById("scroll-to");
    scroll.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      onMouseMove={(e) => {
        setCoords({
          x: e.clientX,
        });
      }}
      className="relative cursor-default overflow-hidden w-screen h-screen items-center justify-center flex bg-stone-800"
    >
      <div className="z-50 text-white text-4xl opacity-0 fade">
        <h1 className="text-center">
          Hi, I'm <p className="inline text-red-400 font-bold jump">Nate</p>
          <p>A Frontend Developer based in New York</p>
          <button
            onClick={() => {
              scrollTo();
            }}
            className="hover:cursor-pointer hover:text-stone-400 mt-10 animate-bounce"
          >
            Click Here to view my projects
          </button>
        </h1>
      </div>
      <div className="absolute w-full h-20 flex flex-col items-center justify-center">
        <div className="back bg-cover absolute w-full h-full z-0"></div>

        <div className="flex flex-col">
          <h2
            className="relative fade text-9xl text-stone-900 font-bold  whitespace-nowrap "
            style={{ right: coords.x / 20 }}
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>

          <h2
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap "
            style={{ right: coords.x / 10 }}
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 15 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
          <h2
            style={{ right: coords.x / 8 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 30 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
          <h2
            style={{ right: coords.x / 25 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 35 }}
            className="relative fade text-9xl font-bold text-stone-900  whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • FRONTEND
            DEVELOPER • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL
            ALLEYNE • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ right: coords.x / 5 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            className="relative fade text-9xl text-stone-900 font-bold  whitespace-nowrap "
            style={{ right: coords.x / 20 }}
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>

          <h2
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap "
            style={{ right: coords.x / 10 }}
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 15 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
          <h2
            style={{ right: coords.x / 8 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 30 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
          <h2
            style={{ right: coords.x / 25 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 35 }}
            className="relative fade text-9xl font-bold text-stone-900  whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • FRONTEND
            DEVELOPER • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL
            ALLEYNE • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ right: coords.x / 5 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            className="relative fade text-9xl text-stone-900 font-bold  whitespace-nowrap "
            style={{ right: coords.x / 20 }}
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>

          <h2
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap "
            style={{ right: coords.x / 10 }}
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 15 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
          <h2
            style={{ right: coords.x / 8 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 30 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
          <h2
            style={{ right: coords.x / 25 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 35 }}
            className="relative fade text-9xl font-bold text-stone-900  whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • FRONTEND
            DEVELOPER • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL
            ALLEYNE • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ right: coords.x / 5 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            className="relative fade text-9xl text-stone-900 font-bold  whitespace-nowrap "
            style={{ right: coords.x / 20 }}
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>

          <h2
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap "
            style={{ right: coords.x / 10 }}
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 15 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
          <h2
            style={{ right: coords.x / 8 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
            FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h2>
          <h2
            style={{ left: coords.x / 30 }}
            className="relative fade text-9xl font-bold text-stone-900 whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h2>
        </div>
      </div>
    </section>
  );
}
