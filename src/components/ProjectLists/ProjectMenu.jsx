import { Link } from 'react-router-dom';
import './styles.css';

const ProjectMenu = () => {
  return (
    <footer className="project-menu">
      <div className="section-center">
        <h5 className="pj-menu-title">
          more projects<i className="fa-regular fa-lightbulb"></i>
        </h5>
        <ul className="projects-list">
          <li>
            <Link className="project-link" to="/carousel">
              carousel : image slider
            </Link>
          </li>
          <li>
            <Link className="project-link" to="/likeButton">
              like button feature
            </Link>
          </li>
          <li>
            <Link className="project-link" to="/pagination">
              pagination
            </Link>
          </li>
          <li>
            <Link className="project-link" to="/progressBar">
              progress bar
            </Link>
          </li>
          <li>
            <Link className="project-link" to="/folders">
              folder structure
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default ProjectMenu;
