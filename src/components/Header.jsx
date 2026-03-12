// import { Link } from "react-router-dom";

// function Header() {
//   const handleDownloadCV = () => {
//     const link = document.createElement("a");
//     link.href = "/my_cv.pdf";
//     link.download = "my_cv.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow custom-navbar">
//       <div className="container">
//         {/* Brand */}
//         <Link className="navbar-brand fw-bold" to="/">
//           Pratham Majithiya
//         </Link>

//         {/* Hamburger */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           {/* Center Links */}
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
//             <li className="nav-item">
//               <a className="nav-link" href="#intro">
//                 Intro
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#projects">
//                 Projects
//               </a>
//             </li>
//           </ul>

//           {/* Right Buttons */}
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">  </ul>

//           <div className="d-flex align-items-center">
//             <a href="/cv.pdf" download className="btn btn-outline-light me-3">
//               Download CV
//             </a>

//             <Link to="/login" className="btn btn-outline-light me-2">
//               Login
//             </Link>

//             <Link to="/signup" className="btn btn-primary">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;
import { useEffect, useState } from "react"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("intro")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["intro", "projects", "skills", "contact"]
      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop - 120
          const height = el.offsetHeight
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`premium-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrapper">

        {/* LOGO */}
        <a href="#intro" className="nav-logo">
          Pratham<span>.</span>
        </a>

        {/* CENTER LINKS */}
        <div className="nav-links">
          <a href="#intro" className={active === "intro" ? "active" : ""}>Introduction</a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
          <a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-actions">
          <a href="/cv.pdf" download className="btn-outline">
            Download CV
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Header
