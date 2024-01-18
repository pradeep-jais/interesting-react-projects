import './styles.css';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-center">
        <h5 className="footer-heading">
          more projects<i className="fa-regular fa-lightbulb"></i>
        </h5>
        <ul className="footer-projects-list">
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <Link
                  className="footer-project-link"
                  to={`projects/${project.path}`}
                >
                  {project.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          All rights reserve &copy;{new Date().getFullYear()} pradeep's react
          project collections
        </p>
      </div>
    </footer>
  );
};
export default Footer;
