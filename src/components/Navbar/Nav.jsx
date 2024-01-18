import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="navbar section-center">
        <div className="nav-icon">
          <Link to="/projects">
            <i className="fa-brands fa-react"></i>
          </Link>
          <span className="hint">projects</span>
        </div>
        <p className="nav-title">Interesting React Projects</p>
        <span className="author">&copy;PradeepJais</span>
      </div>
    </nav>
  );
};
export default Nav;
