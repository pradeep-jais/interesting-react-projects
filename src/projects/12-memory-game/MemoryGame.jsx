import { useEffect, useState } from 'react';
const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [gameCell, setGameCell] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [won, setWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  useEffect(() => {
    if (matched.length === gameCell.length && matched.length > 0) {
      setWon(true);
    }
  }, [matched]);

  const initializeGame = () => {
    let length = gridSize * gridSize;
    length = length % 2 ? length - 1 : length;

    const cell = Array.from({ length }, (_, i) => Math.floor(i / 2 + 1));

    const shuffleCell = cell.sort(() => Math.random() - 0.5);

    setGameCell(shuffleCell);
    setFlipped([]);
    setMatched([]);
    setWon(false);
  };

  const handleSizeChange = (e) => {
    const value = e.target.value;
    if (value < 2 || value > 10) return;

    setGridSize(value);
  };

  const isFlipped = (i) => {
    return flipped.includes(i);
  };

  const isMatched = (i) => {
    return matched.includes(i);
  };

  const handleCardClick = (i) => {
    if (matched.includes(i)) return;

    const newFlipped = [...flipped];

    if (newFlipped[0] === i) {
      setFlipped([]);
      return;
    }

    if (newFlipped.length === 0) {
      newFlipped.push(i);
    } else if (newFlipped.length === 1) {
      newFlipped.push(i);

      const [first, second] = newFlipped;

      if (gameCell[first] === gameCell[second]) {
        setMatched([...matched, ...newFlipped]);
      }

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }

    setFlipped(newFlipped);
  };

  return (
    <section className="section-center mt-4 mb-8">
      <div className="text-center">
        <h2>Memory game</h2>
        <div className="underline"></div>
      </div>
      <div className="flex flex-col gap-8 items-center mt-4  ">
        <div className="flex gap-2">
          <label htmlFor="size" className="capitalize">
            grid size:
          </label>
          <input
            name="size"
            type="number"
            value={gridSize}
            onChange={(ev) => handleSizeChange(ev)}
            className="text-slate-900 w-[4rem] px-1"
          />
        </div>
        <article
          className={`game-board grid gap-1`}
          style={{
            gridTemplateColumns: `repeat(${gridSize},1fr)`,
            width: '100%',
            maxWidth: `${gridSize * 5}rem`,
          }}
        >
          {gameCell.map((value, i) => {
            return (
              <div
                key={i}
                className={`${
                  isMatched(i)
                    ? 'bg-green-500 text-white'
                    : isFlipped(i)
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 text-slate-300'
                } aspect-square flex justify-center items-center text-lg font-bold rounded-lg cursor-pointer transition-all duration-300`}
                onClick={() => handleCardClick(i)}
              >
                {isFlipped(i) || isMatched(i) ? value : ''}
              </div>
            );
          })}
        </article>
        {won && (
          <span className="text-green-500 font-bold text-3xl mb-[-1rem]  capitalize animate-bounce">
            you won!
          </span>
        )}
        <button
          className="btn bg-green-500 font-bold text-sm  hover:bg-green-600"
          onClick={initializeGame}
        >
          {won ? 'play again' : 'reset game'}
        </button>
      </div>
    </section>
  );
};
export default MemoryGame;
