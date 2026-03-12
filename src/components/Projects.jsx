import { useState } from "react"
import Tilt from "react-parallax-tilt"

function Projects() {

  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Gym Website",
      category: "React",
      description: "Responsive gym management system.",
      image: "/project1.jpg",
      live: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      category: "UI",
      description: "Modern animated portfolio.",
      image: "/project2.jpg",
      live: "#",
      github: "#"
    },
    {
      title: "Login System",
      category: "React",
      description: "Authentication + protected routes.",
      image: "/project3.jpg",
      live: "#",
      github: "#"
    },
    {
      title: "E-Commerce UI",
      category: "JS",
      description: "Frontend product experience.",
      image: "/project4.jpg",
      live: "#",
      github: "#"
    }
  ]

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter)

  return (
    <section className="projects-insane" id="projects">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="insane-title">Featured Work</h2>

          <div className="filter-tabs mt-4">
            {["All", "React", "UI", "JS"].map(tab => (
              <button
                key={tab}
                className={`filter-btn ${filter === tab ? "active" : ""}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-5">

          {filtered.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-3">

              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={1500}
              >

                <div className="insane-card">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="insane-image"
                  />

                  <div className="insane-overlay">
                    <h6>{project.title}</h6>
                    <p>{project.description}</p>

                    <div className="insane-buttons">
                      <a href={project.live} target="_blank">Live</a>
                      <a href={project.github} target="_blank">GitHub</a>
                    </div>
                  </div>

                </div>

              </Tilt>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects
