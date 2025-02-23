import { Link } from 'react-router-dom';
import DigitalClock from '../Clock/DigitalClock';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [isClockVisible, setIsClockVisible] = useState(true);

  useEffect(() => {
    const updateScreen = () => {
      if (window.innerWidth > 648) {
        setIsClockVisible(true);
      } else setIsClockVisible(false);
    };

    updateScreen();

    window.addEventListener('resize', updateScreen);
    return () => {
      window.removeEventListener('resize', updateScreen);
    };
  }, []);

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
        <div className="author">
          {isClockVisible && <DigitalClock />}
          <span>&copy;PradeepJais</span>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
