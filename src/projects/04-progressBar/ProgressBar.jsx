import { useEffect, useState } from 'react';
import './styles.css';
import Bars from './Bars';
const ProgressBar = () => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((val) => {
        return val + 1;
      });
    }, 100);
    return () => {
      if (count > 100) {
        clearInterval(id);
      }
    };
  }, []);

  return (
    <section className="section">
      <div className="section-center progress-bar-center">
        <div className="title">
          <h3>Progress bar</h3>
        </div>
        <Bars
          count={count}
          onComplete={() => {
            setSuccess(true);
          }}
        />
        {success ? <p>Success!</p> : <p>Loading...</p>}
        <Bars count={75} />
      </div>
    </section>
  );
};
export default ProgressBar;
