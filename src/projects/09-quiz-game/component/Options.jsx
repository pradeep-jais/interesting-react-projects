const Options = ({ question, setQuestion, setAlert }) => {
  const chooseOption = (index) => {
    const selectedOption = question.options[index];

    setQuestion((question) => {
      question.selectedOption = selectedOption;
      if (selectedOption === question.correct_answer) {
        question.score++;
      }
      return { ...question };
    });

    setAlert(false);
  };

  const checkOption = (option) => {
    if (
      option === question.selectedOption &&
      option === question.correct_answer
    ) {
      return 'active';
    } else if (
      option === question.selectedOption &&
      option != question.correct_answer
    ) {
      return 'wrong';
    } else if (
      question.selectedOption != question.correct_answer &&
      option === question.correct_answer
    ) {
      return 'active';
    } else {
      return '';
    }
  };

  return (
    <div className="options">
      {question.options.map((option, i) => {
        return (
          <button
            key={i}
            className={`option ${
              question.selectedOption && checkOption(option)
            }`}
            onClick={() => chooseOption(i)}
            disabled={question.selectedOption}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
