import "./styles.css";
import { projectsConfig } from "../../data/projectsConfig";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects">
      <div className="section-center">
        <h3 className="projects-title">
          Explore all projects <i className="fa-regular fa-lightbulb"></i>
        </h3>
        <ul className="projects-list">
          {projectsConfig.map((project, index) => {
            return (
              <li key={index}>
                <Link className="project-link" to={project.path}>
                  {project.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
