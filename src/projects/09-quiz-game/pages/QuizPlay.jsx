import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorAlert from '../component/ErrorAlert';
import ErrorPage from '../../../components/Error';
import Options from '../component/Options';
import shuffleArr from '../utils/shuffleArr';
import useFetchData from '../hooks/useFetchData';

const QUIZ_API =
  'https://opentdb.com/api.php?amount=10&type=multiple&category=';

const QuizPlay = () => {
  const { state: quizSettings } = useLocation();
  const { questions, isLoading, error } = useFetchData(
    `${QUIZ_API}${quizSettings.value}&difficulty=${quizSettings.difficulty}`
  );
  const [question, setQuestion] = useState({
    count: 0,
    statement: '',
    score: 0,
    options: [],
    correct_answer: '',
    selectedOption: '',
  });
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!questions) return;
    const {
      question: statement,
      correct_answer,
      incorrect_answers,
    } = questions[question.count];

    const options = [...incorrect_answers, correct_answer];

    const newQuestionObj = {
      ...question,
      statement,
      correct_answer,
      options: shuffleArr(...options),
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
