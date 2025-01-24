import { useState, useEffect, useRef } from 'react';
import './stylesGemini.css';

const GRID_SIZE = 20;
const SPEED = 300; // Milliseconds per move

const SnakeGameByGemini = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const gameLoop = setInterval(() => {
      if (gameOver) return;
      moveSnake(ctx);
    }, SPEED);

    return () => clearInterval(gameLoop); // Clean up interval on unmount
  }, [snake, food, direction, gameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function generateFood() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }

  function moveSnake(ctx) {
    const head = { ...snake[0] };

    switch (direction) {
      case 'UP':
        head.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE;
        break;
      case 'DOWN':
        head.y = (head.y + 1) % GRID_SIZE;
        break;
      case 'LEFT':
        head.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE;
        break;
      case 'RIGHT':
        head.x = (head.x + 1) % GRID_SIZE;
        break;
    }

    if (checkCollision(head)) {
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake];
    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      setScore(score + 10);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
    draw(ctx, newSnake);
  }

  function checkCollision(head) {
    return snake.some(
      (segment) =>
        segment.x === head.x && segment.y === head.y && segment !== head
    );
  }

  function handleKeyDown(e) {
    e.preventDefault();
    setDirection((prevDirection) => {
      // Functional update here
      switch (e.key) {
        case 'ArrowUp':
          return prevDirection !== 'DOWN' ? 'UP' : prevDirection;
        case 'ArrowDown':
          return prevDirection !== 'UP' ? 'DOWN' : prevDirection;
        case 'ArrowLeft':
          return prevDirection !== 'RIGHT' ? 'LEFT' : prevDirection;
        case 'ArrowRight':
          return prevDirection !== 'LEFT' ? 'RIGHT' : prevDirection;
        default:
          return prevDirection;
      }
    });
  }

  function draw(ctx, snake) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = '#4CAF50'; // Food color
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#007bff' : '#0056b3'; // Head and body colors
      ctx.fillRect(
        segment.x * GRID_SIZE,
        segment.y * GRID_SIZE,
        GRID_SIZE,
        GRID_SIZE
      );
      ctx.strokeStyle = '#fff'; // White border for each segment
      ctx.strokeRect(
        segment.x * GRID_SIZE,
        segment.y * GRID_SIZE,
        GRID_SIZE,
        GRID_SIZE
      );
    });
  }

  const handleRestart = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="game-container">
      <h3>Snake Game By Gemini</h3>
      <canvas
        ref={canvasRef}
        width={GRID_SIZE * GRID_SIZE}
        height={GRID_SIZE * GRID_SIZE}
        className="game-canvas"
      />
      <div className="game-info">
        <p>Score: {score}</p>
        {gameOver && (
          <div className="game-over">
            <p>Game Over!</p>
            <button onClick={handleRestart}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGameByGemini;
