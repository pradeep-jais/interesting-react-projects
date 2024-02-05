import Header from './component/Header';
import QuizHome from './pages/QuizHome';
import './styles.css';

const QuizApp = () => {
  return (
    <section className="quiz-app">
      <div className="section-center">
        <hr />
        <Header />
        <QuizHome />
      </div>
    </section>
  );
};
export default QuizApp;
