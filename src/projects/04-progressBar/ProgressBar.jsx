import './styles.css';
import Bars from './Bars';
const ProgressBar = () => {
  return (
    <div className='progress-bar-center'>
      <Bars value={0} isDynamic={true} />
      <Bars value={75} isDynamic={false} />
    </div>
  );
};
export default ProgressBar;
