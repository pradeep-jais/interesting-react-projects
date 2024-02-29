import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  let newPath = '';

  const breadcrumbs = pathname.split('/').filter((item) => item);

  return (
    <>
      {breadcrumbs.length < 1 ? (
        <div className="breadcrumbs section-center"></div>
      ) : (
        <div className="breadcrumbs section-center">
          <Link to="/">Home /</Link>
          {breadcrumbs.map((path, index) => {
            newPath = newPath + `/${path}`;
            return index === breadcrumbs.length - 1 ? (
              <span key={index}>{path}</span>
            ) : (
              <Link key={index} to={newPath}>
                {`${path} /`}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
