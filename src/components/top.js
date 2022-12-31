import "../style.css";
import { Name } from "./name";

export function Top() {
  return (
    <section className="relative  w-screen h-screen items-center flex bg-black">
      <div className="w-full h-20 flex flex-col items-center justify-center">
        <div className="back bg-cover absolute w-full h-full z-0"></div>
        <Name />
        <h2 className="anim w-full text-white text-center m-1 font-semibold text-xl">
          Front-End Developer
        </h2>
      </div>
    </section>
  );
}
