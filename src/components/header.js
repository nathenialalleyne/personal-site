export function Header() {
  return (
    <header className="absolute w-screen items-center justify-end flex z-10 p-3 bg-white">
      <ul className="flex gap-5 ">
        <a className="hover:cursor-pointer hover:text-stone-400 hover:underline hover:decoration-solid transition duration-150 ease-out">
          Projects
        </a>
        <a className="hover:cursor-pointer hover:text-stone-400 hover:underline hover:decoration-solid transition duration-150 ease-out">
          About
        </a>
        <a className="hover:cursor-pointer hover:text-stone-400 hover:underline hover:decoration-solid transition duration-150 ease-out">
          Contact
        </a>
      </ul>
    </header>
  );
}
