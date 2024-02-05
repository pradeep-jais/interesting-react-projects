import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="title">
      <Link to="/projects/quiz">
        <h3>fun quiz game</h3>
      </Link>
      <div className="underline"></div>
    </div>
  );
};
export default Header;
