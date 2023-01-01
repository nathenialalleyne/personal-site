import Aos from "aos";
import { Top } from "./components/top";
import { Header } from "./components/header";
import { Projects } from "./components/project";

Aos.init();

function App() {
  return (
    <div>
      <Header />
      <Top />
      <Projects />
    </div>
  );
}

export default App;
