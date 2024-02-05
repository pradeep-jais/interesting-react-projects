import QuizSetting from '../component/QuizSetting';

const QuizHome = () => {
  return (
    <div className="quiz-home">
      <img
        src="/images/quiz-bg.jpg"
        alt="quiz-banner"
        className="img quiz-banner"
      />
      <QuizSetting />
    </div>
  );
};
export default QuizHome;
