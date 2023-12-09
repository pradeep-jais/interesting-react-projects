import { useEffect, useState } from 'react';

const Bars = ({ count = 0, onComplete = () => {} }) => {
  const [percentage, setPercentage] = useState(0);

  if (count >= 100) {
    onComplete();
  }

  useEffect(() => {
    if (count >= 0 && count <= 100) {
      setPercentage(count);
    }
    // setPercentage(Math.min(100, Math.max(count, 0)));
  }, [count]);

  return (
    <div className="bars">
      <span style={{ color: percentage > 49 ? '#fff' : '#000' }}>
        {percentage}%
      </span>
      <div style={{ right: `${100 - percentage}%` }}></div>
    </div>
  );
};
export default Bars;
