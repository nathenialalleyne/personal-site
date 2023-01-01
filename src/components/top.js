import { useEffect, useState } from "react";
import "../style.css";
import { Name } from "./name";

export function Top() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <section
      onMouseMove={(e) => {
        setCoords({
          x: e.clientX,
        });
      }}
      className="relative overflow-x-hidden w-screen h-screen items-center justify-center flex bg-white"
    >
      <div className="absolute w-full h-20 flex flex-col items-center justify-center">
        <div className="back bg-cover absolute w-full h-full z-0"></div>

        <div className="flex flex-col">
          <h1
            className="relative fade text-9xl font-bold  whitespace-nowrap "
            style={{ right: coords.x / 20 }}
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h1>

          <h1
            className="relative fade text-9xl font-bold  whitespace-nowrap "
            style={{ right: coords.x / 10 }}
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h1>
          <h1
            style={{ left: coords.x / 15 }}
            className="relative fade text-9xl font-bold  whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h1>
          <h1
            style={{ right: coords.x / 8 }}
            className="relative fade text-9xl font-bold  whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h1>
          <h1
            style={{ left: coords.x / 30 }}
            className="relative fade text-9xl font-bold  whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h1>
          <h1
            style={{ right: coords.x / 25 }}
            className="relative fade text-9xl font-bold  whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h1>
          <h1
            style={{ left: coords.x / 35 }}
            className="relative fade text-9xl font-bold  whitespace-nowrap"
          >
            NATHENIAL ALLEYNE • NATHENIAL ALLEYNE • NATHENIAL ALLEYNE •
          </h1>
          <h1
            style={{ right: coords.x / 5 }}
            className="relative fade text-9xl font-bold  whitespace-nowrap"
          >
            FRONTEND DEVELOPER • FRONTEND DEVELOPER • FRONTEND DEVELOPER •
          </h1>
        </div>
      </div>
    </section>
  );
}
