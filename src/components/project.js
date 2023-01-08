export function Projects() {
  return (
    <section
      id="scroll-to"
      className="relative w-screen h-fit flex flex-col bg-stone-800 mt-5 mb-20 p-5"
    >
      <h2 className="text-white font-bold text-5xl md: mb-5 w-full sm:text-left text-center">
        PROJECTS
      </h2>
      <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img src={require("../assets/Weather-App.png")} alt="Album" />
          </figure>
          <div className="card-body lg:w-2/4">
            <h2 className="card-title">Weather App</h2>
            <div className="flex gap-2 flex-wrap">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-400 text-black">CSS</span>
              <span className="badge bg-gray-400 text-black">
                OpenWeatherAPI
              </span>
            </div>
            <p>
              A weather app that calls a public weather api, allowing a user to{" "}
              <br />
              input any location and get an accurate reading of the weather and
              time
            </p>

            <div className="card-actions justify-end">
              <a
                href="https://nathenialalleyne.github.io/weather-app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn">Live Demo</button>
              </a>
              <a
                href="https://github.com/nathenialalleyne/weather-app"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn ">Repo</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img src={require("../assets/E-Commerce-Site.png")} alt="Album" />
          </figure>
          <div className="card-body lg:w-2/4">
            <h2 className="card-title">E Commerce App</h2>
            <div className="flex gap-2 flex-wrap">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-300 text-black">React</span>
              <span className="badge bg-purple-400 text-black">Redux</span>
              <span className="badge bg-blue-400 text-black">CSS</span>
            </div>
            <p>
              A fake shopping website that makes use of react router to manage
              <br />
              the content of a users cart, the amount of items they have, and
              the prices.
            </p>

            <div className="card-actions justify-end">
              <a
                href="https://nathenialalleyne.github.io/shopping-cart/"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn ">Live Demo</button>
              </a>
              <a
                href="https://github.com/nathenialalleyne/shopping-cart"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn ">Repo</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img src={require("../assets/Uber-Home-Page.png")} alt="Album" />
          </figure>
          <div className="card-body lg:w-2/4">
            <h2 className="card-title">Uber Homepage Remake</h2>
            <div className="flex gap-2 flex-wrap">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-300 text-black">React</span>
              <span className="badge bg-blue-400 text-black">CSS</span>
            </div>
            <p>
              A fully responsive clone of the Uber Homepage created with
              ReactJS. <br /> It includes many of the features and functionality
              found on the original home page
            </p>

            <div className="card-actions justify-end">
              <a
                href="https://nathenialalleyne.github.io/uber-homepage/"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn ">Live Demo</button>
              </a>
              <a
                href="https://github.com/nathenialalleyne/uber-homepage"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn ">Repo</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-stone-900 shadow-xl w-3/4">
          <figure>
            <img
              src={require("../assets/Personal-Portfolio-Site.png")}
              alt="Album"
            />
          </figure>
          <div className="card-body lg:w-2/4">
            <h2 className="card-title">Portfolio Site</h2>
            <div className="flex gap-2 flex-wrap">
              <span className="badge bg-yellow-400 text-black">JavaScript</span>
              <span className="badge bg-blue-300 text-black">React</span>
              <span className="badge bg-blue-400 text-black">TailwindCSS</span>
              <span className="badge bg-purple-400 text-black">DaisyUI</span>
            </div>
            <p>
              The site you're currently viewing! A showcase of some of my
              projects, more information about me, and a place to contact me.
              Built with ReactJS, Tailwind, and DaisyUI
            </p>

            <div className="card-actions justify-end">
              <a
                href="https://www.nathenialalleyne.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn ">Live Demo</button>
              </a>
              <a
                href="https://github.com/nathenialalleyne/personal-site"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn ">Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
