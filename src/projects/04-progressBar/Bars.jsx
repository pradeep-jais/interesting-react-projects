import { useEffect, useState } from 'react';

const Bars = ({ value = 50, isDynamic }) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isDynamic) return;

    let id;
    if (count === 100) {
      clearTimeout(id);
      return;
    }

    id = setTimeout(() => {
      setCount(count + 1);
    }, 100);

    return () => {
      clearTimeout(id);
    };
  }, [count]);

  return (
    <>
      <div className="bars">
        <span style={{ color: count > 49 ? '#fff' : '#000' }}>{count}%</span>
        <div style={{ right: `${100 - count}%` }}></div>
      </div>
      {isDynamic &&
        (count === 100 ? <span>Success!</span> : <span>Loading...</span>)}
    </>
  );
};
export default Bars;
