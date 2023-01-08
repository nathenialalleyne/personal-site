export function Projects() {
  return (
    <section
      id="scroll-to"
      className="relative w-screen h-fit flex flex-col bg-stone-800 mt-20 mb-20 p-5"
    >
      <h2 className="text-white">PROJECTS</h2>
      <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img src={require("../assets/weather-app.png")} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            <div className="flex gap-2">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-400 text-black">CSS</span>
            </div>
            <p>Click the button to listen on Spotiwhy app.</p>

            <div className="card-actions justify-end">
              <button
                formTarget="blank"
                onClick={(e) => {
                  e.href = "../";
                }}
                className="btn"
              >
                Live Demo
              </button>
              <button className="btn ">Repo</button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img src={require("../assets/shopping-cart.jpg")} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            <div className="flex gap-2">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-400 text-black">CSS</span>
            </div>
            <p>Click the button to listen on Spotiwhy app.</p>

            <div className="card-actions justify-end">
              <button className="btn ">Live Demo</button>
              <button className="btn ">Repo</button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img src={require("../assets/uber-home.jpg")} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            <div className="flex gap-2">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-400 text-black">CSS</span>
            </div>
            <p>Click the button to listen on Spotiwhy app.</p>

            <div className="card-actions justify-end">
              <button className="btn ">Live Demo</button>
              <button className="btn ">Repo</button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img src={require("../assets/personal-site.png")} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            <div className="flex gap-2">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-400 text-black">CSS</span>
            </div>
            <p>Click the button to listen on Spotiwhy app.</p>

            <div className="card-actions justify-end">
              <button className="btn ">Live Demo</button>
              <button className="btn ">Repo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
