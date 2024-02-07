import { useLocation, useParams } from 'react-router-dom';

const QuizPlay = () => {
  const location = useLocation();
  console.log(location);
  return <div>QuizPlay</div>;
};
export default QuizPlay;
