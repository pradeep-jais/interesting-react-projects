const QuizSetting = () => {
  return (
    <form className="form settings-form">
      <h4>Quiz setting</h4>
      <input type="text" placeholder="enter your name" className="form-input" />

      {/* Subjects option */}
      <select name="subject" className="form-input subjects">
        <option value="computer" className="subject-option">
          computer
        </option>
        <option value="science" className="subject-option">
          science
        </option>
      </select>

      {/* Difficulty input as radio */}
      <div className="radio-group">
        <div className=" radio-input">
          <input
            type="radio"
            name="difficulty"
            value="easy"
            id="easy"
            defaultChecked
          />
          <label htmlFor="easy" className="form-label">
            easy
          </label>
        </div>
        <div className=" radio-input">
          <input type="radio" name="difficulty" value="medium" id="medium" />
          <label htmlFor="medium" className="form-label">
            medium
          </label>
        </div>
        <div className=" radio-input">
          <input type="radio" name="difficulty" value="hard" id="hard" />
          <label htmlFor="hard" className="form-label">
            hard
          </label>
        </div>
      </div>
      <button type="submit" className="btn enter-quiz-btn">
        start quiz
      </button>
    </form>
  );
};
export default QuizSetting;
