import { Link, useLocation } from 'react-router-dom';

const QuizResult = () => {
  const location = useLocation();
  const { name, score, subject } = location.state;

  return (
    <div className="quiz-result">
      <h3>Hi, {name} :)</h3>
      <p>
        you got <strong>{score}</strong> out of <strong>10</strong> in {''}
        <strong>{subject}</strong> quiz
      </p>
      <Link to="../">
        <button className="btn">new quiz</button>
      </Link>
    </div>
  );
};
export default QuizResult;
