import { SiWikiquote } from "react-icons/si";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact"

function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section  id="intro"   className="about-premium">
        <div className="container-custom text-center">
          <h2 className="about-premium-title mb-4">About Me</h2>

          <p className="about-premium-lead">
            Hi, I'm <span>Pratham</span> — a passionate Frontend Developer.
          </p>

          <p className="about-premium-text">
            I build modern, scalable and user-focused web applications using
            React and modern JavaScript.
          </p>

          <p className="about-premium-text">
            My goal is to craft digital products that feel simple, fast and
            intuitive.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
