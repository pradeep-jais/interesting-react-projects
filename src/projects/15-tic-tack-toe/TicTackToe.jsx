import "./styles.css";
import ResultBanner from "./components/ResultBanner";
import useTicTackToe from "./hooks/useTicTackToe";
import GameCell from "./components/GameCell";

const TicTackToe = () => {
  const { cells, nextMove, winner, gameOver, handleCellClick, resetGame } =
    useTicTackToe();

  return (
    <div className='tic-tack-game'>
      <div className='game-center flex flex-col items-center'>
        <div className='text-2xl mb-5 font-bold'>
          {winner || gameOver ? (
            <button className='btn text-lg' onClick={resetGame}>
              reset game
            </button>
          ) : (
            <>
              <span>{`Player ${nextMove === "O" ? "1" : "2"}'s turn:`}</span>
              <span
                className={`text-4xl ${
                  nextMove === "O" ? "text-blue-500" : "text-red-500"
                }`}
              >
                {nextMove}
              </span>
            </>
          )}
        </div>

        <div className='game-board w-[15rem] grid gap-1 grid-cols-3 aspect-square mb-6'>
          {cells.map((cell, i) => {
            return (
              <GameCell
                key={i}
                cell={cell}
                index={i}
                winner={winner}
                handleCellClick={handleCellClick}
                nextMove={nextMove}
              />
            );
          })}
        </div>

        {/* Game Result */}
        {winner && (
          <ResultBanner status={"win"} statusMsg={`Player ${winner} wins`} />
        )}
        {gameOver && <ResultBanner status={"draw"} statusMsg={"It's a tie"} />}
      </div>
    </div>
  );
};
export default TicTackToe;
