import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const QUIZ_API_URL =
  'https://opentdb.com/api.php?amount=10&type=multiple&category=';

const QuizPlay = () => {
  const [score, setScore] = useState(0);
  const { state: quizSettings } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState(null);
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([]);

  const optionRefs = useRef([]);

  // console.log(questions);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.get(
          `${QUIZ_API_URL}${quizSettings.value}&difficulty=${quizSettings.difficulty}`
        );
        setQuestions(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, [quizSettings]);

  useEffect(() => {
    if (!questions) return;
    const { correct_answer, incorrect_answers } = questions[count];

    const options = [...incorrect_answers, correct_answer];

    // shuffle options array
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      // swapping
      [options[i], options[j]] = [options[j], options[i]];
    }
    setOptions(options);
    // console.log(incorrect_answers, options);
  }, [questions, count]);

  const chooseOption = (e, index) => {
    optionRefs.current.forEach((option) => {
      if (option.classList.contains('active')) {
        option.classList.remove('active');
      }
    });
    e.target.classList.add('active');
    const selectedOption = options[index];
    console.log(selectedOption);
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="quiz-play">
      <h5 className="user">welcome! :) {quizSettings.name}</h5>
      <div className="quiz-score">
        <span>{quizSettings.subject}</span>
        <span>score: {score}</span>
      </div>
      <h6 className="question-no">question: {count + 1}</h6>
      <div className="question-container">
        <p className="question">{questions[count].question}</p>
        <div className="options">
          {options.map((option, i) => {
            return (
              <span
                key={i}
                className="option"
                onClick={(e) => chooseOption(e, i)}
                ref={(option) => {
                  optionRefs.current[i] = option;
                }}
              >
                {option}
              </span>
            );
          })}
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
