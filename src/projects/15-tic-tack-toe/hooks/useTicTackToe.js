import { useState } from 'react';

// Utility functions
const initializeBoard = () =>
  Array.from({ length: 9 }).fill({
    value: '',
    isFilled: false,
  });

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

const isGameComplete = (cells) => cells.every((cell) => cell.isFilled);

// Main custom hooks
const useTicTackToe = () => {
  const [cells, setCells] = useState(initializeBoard());
  const [nextMove, setNextMove] = useState('O');
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (i) => {
    const updatedCells = cells.map((cell, index) => {
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
    setCells(updatedCells);

    // Game results
    const { player } = winningLogic(updatedCells);

    if (player) {
      setWinner(player);
    }

    if (isGameComplete(updatedCells) && player === '') {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setCells(initializeBoard());
    setWinner('');
    setGameOver(false);
    setNextMove('O');
  };

  return { cells, nextMove, winner, gameOver, resetGame, handleCellClick };
};

export default useTicTackToe;
