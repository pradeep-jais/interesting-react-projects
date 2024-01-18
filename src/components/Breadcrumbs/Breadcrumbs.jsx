import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const breadcrumbs = pathname.split('/').filter((item) => item);

  return (
    <>
      {breadcrumbs.length < 1 ? (
        <div className="breadcrumbs section-center"></div>
      ) : (
        <div className="breadcrumbs section-center">
          <Link to="/">Home /</Link>
          {breadcrumbs.map((item, index) => {
            return index === breadcrumbs.length - 1 ? (
              <span key={index}>{item}</span>
            ) : (
              <Link key={index} to={`/${item}`}>
                {`${item} /`}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
