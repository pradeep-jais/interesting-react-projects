import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const QUIZ_API_URL =
  'https://opentdb.com/api.php?amount=10&type=multiple&category=';

const QuizPlay = () => {
  let [score, setScore] = useState(0);
  const { state: quizSettings } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState(null);
  // const [count, setCount] = useState(0);
  // const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState({
    count: 0,
    statement: '',
    options: [],
    correct_answer: '',
    selectedOption: '',
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
  }, [quizSettings]);

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
    const newQuestionObj = {
      ...question,
      statement,
      correct_answer,
      options,
    };
    setQuestion(newQuestionObj);
  }, [questions, question.count]);

  const chooseOption = (index) => {
    const selectedOption = question.options[index];

    if (selectedOption === question.correct_answer) {
      setScore(score + 1);
    }
    setQuestion((question) => {
      return { ...question, selectedOption };
    });
  };

  const checkOption = (option) => {
    if (
      option === question.selectedOption &&
      option === question.correct_answer
    ) {
      return 'active';
    } else if (
      option === question.selectedOption &&
      option != question.correct_answer
    ) {
      return 'wrong';
    } else if (
      question.selectedOption != question.correct_answer &&
      option === question.correct_answer
    ) {
      return 'active';
    } else {
      return '';
    }
  };

  const handleNextQuestion = () => {
    const newQuestionObj = { ...question, selectedOption: null };
    if (newQuestionObj.count >= 9) {
      return;
    }
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
              <button
                key={i}
                className={`option ${
                  question.selectedOption && checkOption(option)
                }`}
                onClick={() => chooseOption(i)}
                disabled={question.selectedOption}
              >
                {option}
              </button>
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
