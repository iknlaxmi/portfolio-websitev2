import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
