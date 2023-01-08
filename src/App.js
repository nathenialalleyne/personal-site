import Aos from "aos";
import { Top } from "./components/top";
import { Header } from "./components/header";
import { Projects } from "./components/project";

import "./style.css";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

Aos.init();

function App() {
  return (
    <div>
      <Header />
      <Top />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
