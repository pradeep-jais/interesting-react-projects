import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const timeoutId = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      timeoutId.current = setTimeout(() => {
        setTime(new Date());
        updateTime();
      }, 1000);
    };

    updateTime();

    return () => {
      setTimeout(timeoutId.current);
    };
  }, []);

  // const formatTime = time.toLocaleTimeString('en-US', {
  //   hour12: true, // default
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  // });

  const formatTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(time);

  return <div className={styles.digitalClock}>{formatTime}</div>;
};
export default DigitalClock;
