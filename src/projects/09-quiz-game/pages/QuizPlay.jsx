import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const QUIZ_API_URL =
  'https://opentdb.com/api.php?amount=10&type=multiple&category=';

const QuizPlay = () => {
  const [score, setScore] = useState(0);
  const { state: quizSettings } = useLocation();
  const [questions, setQuestions] = useState(null);
  console.log(questions);
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.get(
          `${QUIZ_API_URL}${quizSettings.value}&difficulty=${quizSettings.difficulty}`
        );
        setQuestions(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, [quizSettings]);

  return (
    <div className="quiz-play">
      <h5 className="user">welcome! :) {quizSettings.name}</h5>
      <div className="quiz-score">
        <span>{quizSettings.subject}</span>
        <span>score: {score}</span>
      </div>
      <h6 className="question-no">question: {1}</h6>
      <div className="question-container">
        <p className="question">{questions[0].question}</p>
        <div className="options">
          <span className="option">Kolkata</span>
          <span className="option">new delhi</span>
          <span className="option">patna</span>
          <span className="option">mumbai</span>
        </div>
        <div className="btns">
          <div className="btn btn-quit">quit</div>
          <div className="btn btn-next">next question</div>
        </div>
      </div>
    </div>
  );
};
export default QuizPlay;
