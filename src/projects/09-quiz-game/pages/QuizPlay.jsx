import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ErrorAlert from '../component/ErrorAlert';
import Error from '../../../components/Error';

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
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
        setIsLoading(false);
        setError(error.message);
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

    setAlert(false);
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
    const newQuestionObj = { ...question };
    if (!newQuestionObj.selectedOption) {
      setAlert(true);
      return;
    }

    // navigate to see result and finish quiz
    if (newQuestionObj.count >= 9) {
      navigate('../result', { state: { score, name: quizSettings.name } });
      return;
    }
    newQuestionObj.count++;
    newQuestionObj.selectedOption = null;
    setQuestion(newQuestionObj);
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <div className="quiz-play">
      <h5 className="user">welcome! :) {quizSettings.name}</h5>
      <div className="quiz-score">
        <span>{quizSettings.subject}</span>
        <span>score: {score}</span>
      </div>
      <h6 className="question-no">question: {question.count + 1}</h6>
      <div className="question-container">
        <p className="question">{question.statement}</p>
        {alert && <ErrorAlert>please select an option first!</ErrorAlert>}
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
          <button className="btn btn-quit">quit</button>
          <button className="btn btn-next" onClick={handleNextQuestion}>
            {question.count >= 9 ? 'finish quiz' : 'next question'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuizPlay;
