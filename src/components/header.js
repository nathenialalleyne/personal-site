import { useEffect } from "react";

export function Header(props) {
  const scrollTo = () => {
    const scroll = document.getElementById("scroll-to");
    scroll.scrollIntoView({ behavior: "smooth" });
  };

  const scrollContact = () => {
    const scroll = document.getElementById("scroll-contact");
    scroll.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="absolute w-full h-fit items-center justify-end flex z-10 p-3 pr-5 bg-stone-900">
      <ul className="flex gap-5 ">
        <button
          onClick={() => {
            scrollTo();
          }}
          className="text-stone-200 hover:cursor-pointer hover:text-stone-400 hover:underline hover:decoration-solid transition duration-150 ease-out"
        >
          Projects
        </button>
        <button
          onClick={() => {
            scrollContact();
          }}
          className="text-stone-200 hover:cursor-pointer hover:text-stone-400 hover:underline hover:decoration-solid transition duration-150 ease-out"
        >
          Contact
        </button>
      </ul>
    </header>
  );
}
