// Import necessary libraries
import { useState, useEffect, useRef } from 'react';
import './stylesByGPT.css';

const SnakeGame = () => {
  const [snake, setSnake] = useState([[5, 5]]); // Initial snake position
  const [food, setFood] = useState([10, 10]); // Initial food position
  const [direction, setDirection] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [speed, setSpeed] = useState(200);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const boardSize = 16;
  const intervalRef = useRef(null);

  // Generate random food position
  const generateFood = () => {
    let x = Math.floor(Math.random() * boardSize);
    let y = Math.floor(Math.random() * boardSize);
    return [x, y];
  };

  // Handle key press for direction change
  const handleKeyDown = (e) => {
    e.preventDefault();
    if (!isGameRunning) return;

    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'DOWN') setDirection('UP');
        break;
      case 'ArrowDown':
        if (direction !== 'UP') setDirection('DOWN');
        break;
      case 'ArrowLeft':
        if (direction !== 'RIGHT') setDirection('LEFT');
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  // Move the snake
  const moveSnake = () => {
    const newSnake = [...snake];
    const head = [...newSnake[newSnake.length - 1]];

    switch (direction) {
      case 'UP':
        head[1] -= 1;
        break;
      case 'DOWN':
        head[1] += 1;
        break;
      case 'LEFT':
        head[0] -= 1;
        break;
      case 'RIGHT':
        head[0] += 1;
        break;
      default:
        break;
    }

    newSnake.push(head);

    // Check if food is eaten
    if (head[0] === food[0] && head[1] === food[1]) {
      setScore(score + 1);
      setFood(generateFood());
    } else {
      newSnake.shift(); // Remove tail if no food is eaten
    }

    // Check for collision
    if (
      head[0] < 0 ||
      head[1] < 0 ||
      head[0] >= boardSize ||
      head[1] >= boardSize ||
      newSnake
        .slice(0, -1)
        .some((segment) => segment[0] === head[0] && segment[1] === head[1])
    ) {
      if (score > highScore) setHighScore(score);
      setIsGameRunning(false);
      setDirection('');
      return;
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    if (isGameRunning) {
      intervalRef.current = setInterval(moveSnake, speed);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [snake, direction, isGameRunning]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, isGameRunning]);

  const startGame = () => {
    setSnake([[5, 5]]);
    setFood(generateFood());
    setScore(0);
    setDirection('RIGHT');
    setIsGameRunning(true);
  };

  return (
    <div className="snake-game-container">
      <h3>Snake Game by chatGPT</h3>
      <div className="snake-game-controls">
        <div className="snake-game-speed">
          <label>Speed: </label>
          <select
            onChange={(e) => setSpeed(Number(e.target.value))}
            value={speed}
            disabled={isGameRunning}
          >
            <option value="300">Low</option>
            <option value="200">Medium</option>
            <option value="100">Fast</option>
          </select>
        </div>
        <div className="game-scores">
          <h5 className="snake-game-score">Score: {score}</h5>
          <h5 className="snake-game-high-score">High Score: {highScore}</h5>
        </div>
      </div>

      <div className="snake-game-board">
        {!isGameRunning && (
          <div className="board-overlay">
            {score > 0 && <span>Game over!</span>}
            <button
              className="btn snake-game-btn animate-bounce"
              onClick={startGame}
            >
              {score > 0 ? 'Play Again' : 'Play'}
            </button>
          </div>
        )}
        {Array.from({ length: boardSize }).map((_, row) =>
          Array.from({ length: boardSize }).map((_, col) => {
            const isSnake = snake.some(
              (segment) => segment[0] === col && segment[1] === row
            );
            const isFood = food[0] === col && food[1] === row;
            const isHead =
              snake[snake.length - 1][0] === col &&
              snake[snake.length - 1][1] === row;
            return (
              <div
                key={`${row}-${col}`}
                className={`snake-game-cell ${
                  isHead ? 'snake-head' : isSnake ? 'snake' : ''
                } ${isFood ? 'food' : ''}`}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
