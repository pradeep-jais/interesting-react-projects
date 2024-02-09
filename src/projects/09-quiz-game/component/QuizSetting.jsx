import { useRef } from 'react';
import { subjects, difficulty } from '../data/constants';
import { useNavigate } from 'react-router-dom';

const QuizSetting = () => {
  const nameRefs = useRef();
  const subjectRefs = useRef();
  const difficultyRefs = useRef([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRefs.current.value,
      value: subjectRefs.current.value,
      subject: subjects.find((item) => item.value == subjectRefs.current.value)
        .category,
      difficulty: difficultyRefs.current.reduce((acc, curr) => {
        if (curr.checked) {
          acc = curr.value;
        }
        return acc;
      }, ''),
    };
    // console.log(formData);

    // Navigate to play quiz page with quiz setting data
    navigate('./play', { state: formData });
  };

  return (
    <form className="form settings-form" onSubmit={handleSubmit}>
      <h4>Quiz setting</h4>
      <input
        type="text"
        placeholder="enter your name"
        className="form-input"
        name="name"
        ref={nameRefs}
      />

      {/* Subjects option */}
      <select name="subject" className="form-input subjects" ref={subjectRefs}>
        {subjects.map((subject) => {
          const { category, value } = subject;
          return (
            <option key={category} value={value} className="subject-option">
              {category}
            </option>
          );
        })}
      </select>

      {/* Difficulty input as radio */}
      <div className="radio-group">
        {difficulty.map((item, index) => {
          return (
            <div key={item.value} className="radio-input">
              <input
                type="radio"
                name="difficulty"
                value={item.value}
                id={'difficulty-' + item.label}
                defaultChecked={index === 1 ? true : false}
                ref={(input) => {
                  difficultyRefs.current[index] = input;
                }}
              />
              <label
                htmlFor={'difficulty-' + item.label}
                className="form-label"
              >
                {item.label}
              </label>
            </div>
          );
        })}
      </div>
      <button type="submit" className="btn enter-quiz-btn">
        start quiz
      </button>
    </form>
  );
};
export default QuizSetting;
