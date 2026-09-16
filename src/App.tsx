import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Certificates } from "./components/sections/Certificates";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen selection:bg-white/30 bg-[#161616]">
      {/* Main content */}
      <div className="relative z-10 w-full h-full text-white">
        <Navbar />
        <main className="flex flex-col items-center w-full">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
