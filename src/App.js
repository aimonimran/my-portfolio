import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Preloader";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {/* {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )} */}
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
