const Cell = ({ filled, isDisabled, onClick, label }) => {
  return (
    <button
      className={filled ? 'cell cell-active' : 'cell'}
      disabled={isDisabled}
      aria-label={label}
      onClick={onClick}
    ></button>
  );
};
export default Cell;
