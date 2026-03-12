import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap
} from "react-icons/fa"

import { SiTailwindcss } from "react-icons/si"

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
    { name: "React.js", icon: <FaReact />, color: "#61dbfb" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" }
  ]

  return (
    <section className="skills-insane" id="skills">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="insane-skills-title">Tech Stack</h2>
          <p className="insane-skills-subtitle">
            Technologies I use to craft modern web experiences
          </p>
        </div>

        <div className="row g-5 justify-content-center">

          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">

              <div className="insane-skill-card">

                <div
                  className="insane-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <h6>{skill.name}</h6>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills
