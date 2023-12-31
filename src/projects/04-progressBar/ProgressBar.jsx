import { useEffect, useState } from 'react';
import './styles.css';
import Bars from './Bars';
const ProgressBar = () => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);

  const [stopCount, setStopCount] = useState(false);

  useEffect(() => {
    if (count === 100) {
      setStopCount(true);
    }
  }, [count]);

  useEffect(() => {
    let id;
    if (count < 100) {
      id = setInterval(() => {
        setCount((val) => {
          // console.log(val, 'interval');
          return val + 1;
        });
      }, 100);
    }
    return () => {
      // console.log('cleanup, interval cleared');
      clearInterval(id);
    };
  }, [stopCount]);

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
        {success ? <span>Success!</span> : <span>Loading...</span>}
        <Bars count={75} />
      </div>
    </section>
  );
};
export default ProgressBar;
