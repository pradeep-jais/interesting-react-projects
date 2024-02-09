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
  // const [count, setCount] = useState(0);
  // const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState({
    count: 1,
    statement: '',
    options: [],
    correct_answer: '',
    selectedOptionIndex: null,
  });

  // const optionRefs = useRef([]);

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
  }, []);

  useEffect(() => {
    if (!questions) return;
    const {
      question: statement,
      correct_answer,
      incorrect_answers,
    } = questions[question.count];

    const options = [...incorrect_answers, correct_answer];

    // shuffle options array
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      // swapping
      [options[i], options[j]] = [options[j], options[i]];
    }
    const newQuestionObj = { ...question, statement, correct_answer, options };
    setQuestion(newQuestionObj);
    console.log(newQuestionObj);
  }, [questions, question.count]);

  const chooseOption = (e, index) => {
    const selectedOption = question.options[index];

    if (selectedOption === question.correct_answer) {
      e.target.classList.add('active');
    } else if (selectedOption != question.correct_answer) {
      e.target.classList.add('wrong');
    }
    const updatedOptions = question.options.map((option, i) =>
      i === index ? { option, selected: true } : option
    );
    console.log(updatedOptions);
  };

  const handleNextQuestion = () => {
    // Check for correct answer
    // if()
    const newQuestionObj = { ...question };
    newQuestionObj.count++;

    setQuestion(newQuestionObj);
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
      <h6 className="question-no">question: {question.count}</h6>
      <div className="question-container">
        <p className="question">{question.statement}</p>
        <div className="options">
          {question.options.map((option, i) => {
            return (
              <span
                key={i}
                className="option"
                onClick={(e) => chooseOption(e, i)}
              >
                {option}
              </span>
            );
          })}
        </div>
        <div className="btns">
          <div className="btn btn-quit">quit</div>
          <div className="btn btn-next" onClick={handleNextQuestion}>
            next question
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizPlay;
