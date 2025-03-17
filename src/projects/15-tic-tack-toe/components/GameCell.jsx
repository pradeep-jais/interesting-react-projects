const GameCell = ({ cell, index, winner, handleCellClick, nextMove }) => {
  return (
    <button
      className={`bg-slate-300 aspect-square rounded-md cursor-pointer hover:bg-slate-400 hover:text-blue-500 transition flex justify-center items-center text-3xl font-bold border-none ${
        cell.isFilled || winner ? 'disable-cell' : ''
      }`}
      disabled={cell.isFilled || winner}
      onClick={() => handleCellClick(index)}
      onMouseEnter={(e) => {
        if (!cell.isFilled) {
          e.target.innerText = nextMove;
        }
      }}
      onMouseLeave={(e) => {
        if (!cell.isFilled) {
          e.target.innerText = '';
        }
      }}
    >
      {cell.value}
    </button>
  );
};

export default GameCell;
