import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer-insane text-white">

      <div className="container py-5">
        <div className="row">

          {/* Left */}
          <div className="col-lg-4 mb-4">
            <h4 className="footer-brand">Pratham Majithiya</h4>
            <p className="footer-text">
              Frontend Developer building modern, scalable and
              high-performance web applications.
            </p>
          </div>

          {/* Center */}
          <div className="col-lg-4 mb-4 text-lg-center">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#intro">Intro</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
               <li><a href="#skills">Skills</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="col-lg-4 mb-4 text-lg-end">
            <h5 className="footer-heading">Connect</h5>
            <div className="footer-icons">
              <a href="#"><FaGithub /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

        </div>

        <hr className="footer-line" />

        <div className="text-center small">
          © {new Date().getFullYear()} Pratham Majithiya. All rights reserved.
        </div>

      </div>

      {/* Scroll Top Button */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

    </footer>
  )
}

export default Footer
