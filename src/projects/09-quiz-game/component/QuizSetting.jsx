import { useRef } from 'react';
const difficulty = [
  { value: 'easy', label: 'easy' },
  { value: 'medium', label: 'medium' },
  { value: 'hard', label: 'hard' },
];

const QuizSetting = () => {
  const nameRefs = useRef();
  const subjectRefs = useRef();
  const difficultyRefs = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //   const formData = {
    //     name: nameRefs.current.value,
    //     subject: subjectRefs.current.value,
    //     difficulty: difficultyRefs.current.reduce((acc, curr) => {
    //       if (curr.checked) {
    //         acc = curr.value;
    //       }
    //       return acc;
    //     }, ''),
    //   };
    //   console.log(formData);

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData.entries());
    console.log(dataObject);
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
        <option value="computer" className="subject-option">
          computer
        </option>
        <option value="science" className="subject-option">
          science
        </option>
      </select>

      {/* Difficulty input as radio */}
      <div className="radio-group">
        {difficulty.map((item, index) => {
          return (
            <div key={item.name} className=" radio-input">
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
