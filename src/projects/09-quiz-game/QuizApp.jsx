import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import QuizHome from './pages/QuizHome';
import './styles.css';
import QuizPlay from './pages/QuizPlay';
import QuizResult from './pages/QuizResult';

const QuizApp = () => {
  return (
    <section className="quiz-app">
      <div className="section-center">
        {/* <hr /> */}
        <Header />
        <Routes>
          <Route path="/" element={<QuizHome />} />
          <Route path="/play" element={<QuizPlay />} />
          <Route path="/result" element={<QuizResult />} />
        </Routes>
      </div>
    </section>
  );
};
export default QuizApp;
