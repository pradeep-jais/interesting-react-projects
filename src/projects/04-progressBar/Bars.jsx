const Bars = ({ count = 0, onComplete = () => {} }) => {
  if (count === 100) {
    onComplete();
  }

  return (
    <div className="bars">
      <span style={{ color: count > 49 ? '#fff' : '#000' }}>{count}%</span>
      <div style={{ right: `${100 - count}%` }}></div>
    </div>
  );
};
export default Bars;
