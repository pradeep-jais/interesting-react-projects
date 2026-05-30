import { Route, Routes } from "react-router-dom";
import QuizHome from "./pages/QuizHome";
import "./styles.css";
import QuizPlay from "./pages/QuizPlay";
import QuizResult from "./pages/QuizResult";

const QuizApp = () => {
  return (
    <div className='quiz-app'>
      <Routes>
        <Route path='/' element={<QuizHome />} />
        <Route path='/play' element={<QuizPlay />} />
        <Route path='/result' element={<QuizResult />} />
      </Routes>
    </div>
  );
};
export default QuizApp;
