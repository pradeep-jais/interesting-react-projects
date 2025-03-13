import './styles.css';
import Bars from './Bars';
const ProgressBar = () => {
  return (
    <section className="section">
      <div className="section-center progress-bar-center">
        <div className="title">
          <h3>Progress bar</h3>
          <div className="underline"></div>
        </div>
        <Bars value={0} isDynamic={true} />
        <Bars value={75} isDynamic={false} />
      </div>
    </section>
  );
};
export default ProgressBar;
