import { Link } from 'react-router-dom';
import './styles.css';

const Error = ({ errorMessage }) => {
  return (
    <section className="error-page">
      <h3>Ops</h3>
      <h5>Something went wrong!</h5>
      <p className="error-msg error">{errorMessage}</p>
      <Link style={{ textTransform: 'capitalize' }} to="/">
        back to home
      </Link>
    </section>
  );
};
export default Error;
