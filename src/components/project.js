export function Projects() {
  return (
    <section
      id="scroll-to"
      className="relative w-screen h-screen flex pt-5 bg-stone-800"
    >
      <h2 className="text-white"></h2>
      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-2 gap-6 w-3/4 h-3/4 p-30">
          <div className="bg-green-200 ">Weather App</div>
          <div className="bg-green-200 ">Shopping Cart</div>
          <div className="bg-green-200">Uber Homepage</div>
          <div className="bg-green-200 ">Portfolio Site</div>
        </div>
      </div>
    </section>
  );
}
