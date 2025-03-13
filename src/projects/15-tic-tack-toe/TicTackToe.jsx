import { useEffect, useState } from 'react';
import './styles.css';
import ResultBanner from './components/ResultBanner';

const initializeBoard = () =>
  Array.from({ length: 9 }).fill({
    value: '',
    isFilled: false,
  });

const TicTackToe = () => {
  const [cells, setCells] = useState(initializeBoard());
  const [nextMove, setNextMove] = useState('O');
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (i) => {
    const updateCells = cells.map((cell, index) => {
      if (index === i) {
        return {
          ...cell,
          value: nextMove,
          isFilled: true,
        };
      } else {
        return cell;
      }
    });

    setNextMove(nextMove === 'O' ? 'X' : 'O');
    setCells(updateCells);

    // Game results
    const isGameComplete = cells.every((cell) => cell.isFilled);
    const { player } = winningLogic(updateCells);

    if (player) {
      setWinner(player);
    }

    if (isGameComplete && player === '') {
      setGameOver(true);
    }
  };

  const winningLogic = (cells) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // cols
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const comb of winningCombinations) {
      const [a, b, c] = comb;

      if (
        cells[a].value &&
        cells[a].value === cells[b].value &&
        cells[a].value === cells[c].value
      ) {
        return { player: cells[a].value };
      }
    }

    return { player: '' };
  };

  const resetGame = () => {
    setCells(initializeBoard());
    setWinner('');
    setGameOver(false);
    setNextMove('O');
  };

  return (
    <section className="tic-tack-game section">
      <div className="section-center">
        <div className="title mb-6">
          <h1>tic tac toe game</h1>
          <div className="underline"></div>
        </div>

        <div className="game-center flex flex-col items-center">
          <div className="text-2xl mb-5 font-bold">
            {winner || gameOver ? (
              <button className="btn text-lg" onClick={resetGame}>
                reset game
              </button>
            ) : (
              <>
                <span>{`Player ${nextMove === 'O' ? '1' : '2'}'s turn:`}</span>
                <span
                  className={`text-4xl ${
                    nextMove === 'O' ? 'text-blue-500' : 'text-red-500'
                  }`}
                >
                  {nextMove}
                </span>
              </>
            )}
          </div>

          <div className="game-board w-[15rem] grid gap-1 grid-cols-3 aspect-square mb-6">
            {cells.map((cell, i) => {
              return (
                <button
                  key={i}
                  className={`bg-slate-300 aspect-square rounded-md cursor-pointer hover:bg-slate-400 hover:text-blue-500 transition flex justify-center items-center text-3xl font-bold border-none ${
                    cell.isFilled || winner ? 'disable-cell' : ''
                  }`}
                  disabled={cell.isFilled || winner}
                  onClick={() => handleCellClick(i)}
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
            })}
          </div>

          {/* Game Result */}
          {winner && (
            <ResultBanner status={'win'} statusMsg={`Player ${winner} wins`} />
          )}
          {gameOver && (
            <ResultBanner status={'draw'} statusMsg={"It's a tie"} />
          )}
        </div>
      </div>
    </section>
  );
};
export default TicTackToe;
