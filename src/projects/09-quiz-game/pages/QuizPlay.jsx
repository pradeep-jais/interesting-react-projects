import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ErrorAlert from '../component/ErrorAlert';
import ErrorPage from '../../../components/Error';
import Options from '../component/Options';

const QUIZ_API_URL =
  'https://opentdb.com/api.php?amount=10&type=multiple&category=';

const QuizPlay = () => {
  const { state: quizSettings } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState(null);
  const [question, setQuestion] = useState({
    count: 0,
    statement: '',
    score: 0,
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
        if (data.response_code === 1) {
          throw new Error(
            'Questions not available for your selected category.'
          );
        }
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
      const j = Math.floor(Math.random() * i + 1);
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

  const handleNextQuestion = () => {
    const newQuestionObj = { ...question };
    if (!newQuestionObj.selectedOption) {
      setAlert(true);
      return;
    }

    // navigate to see result and finish quiz
    if (newQuestionObj.count >= 9) {
      navigate('../result', {
        state: {
          score: question.score,
          name: quizSettings.name,
          subject: quizSettings.subject,
        },
      });
      return;
    }
    newQuestionObj.count++;
    newQuestionObj.selectedOption = null;
    setQuestion(newQuestionObj);
  };

  const handleQuit = () => {
    navigate('../');
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  return (
    <div className="quiz-play">
      <h5 className="user">welcome! :) {quizSettings.name}</h5>
      <div className="quiz-score">
        <span>{quizSettings.subject}</span>
        <span>score: {question.score}</span>
      </div>
      <h6 className="question-no">question: {question.count + 1}</h6>
      <div className="question-container">
        <p className="question">{question.statement}</p>
        {alert && <ErrorAlert>please select an option first!</ErrorAlert>}
        <Options
          question={question}
          setQuestion={setQuestion}
          setAlert={setAlert}
        />

        <div className="btns">
          <button className="btn btn-quit" onClick={handleQuit}>
            quit
          </button>
          <button className="btn btn-next" onClick={handleNextQuestion}>
            {question.count >= 9 ? 'finish quiz' : 'next question'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuizPlay;
