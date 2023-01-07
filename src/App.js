import Aos from "aos";
import { Top } from "./components/top";
import { Header } from "./components/header";
import { Projects } from "./components/project";

import "./style.css";
import { Contact } from "./components/contact";

Aos.init();

function App() {
  return (
    <div>
      <Header />
      <Top />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
