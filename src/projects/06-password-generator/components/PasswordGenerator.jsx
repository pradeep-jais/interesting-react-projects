import { useState } from 'react';
import { characterData } from '../data/characterData';
import '../styles.css';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(4);

  const [checkboxState, setCheckboxState] = useState(characterData);

  const handleLength = (e) => {
    const length = e.target.value;
    setPasswordLength(length);
  };

  const handleCheckboxState = (index) => {
    const checkboxData = [...characterData];
    checkboxData[index].state = !characterData[index].state;
    console.log(checkboxData);
    setCheckboxState(checkboxData);
  };

  return (
    <section className="pwg-app section">
      <div className="section-center">
        {/* project title */}
        <div className="title pwd-app-title">
          <h3>Password generator</h3>
          <div className="underline"></div>
        </div>

        <div className="container">
          {/* password */}
          <header className="password">
            <p className="pwd">d23wf f-@#$ddd</p>
            <button className="btn copyBtn">copy</button>
          </header>
          {/* password length */}
          <div className="length">
            <span>
              <label>character length:</label>
              <label>{passwordLength}</label>
            </span>
            <input
              type="range"
              min={4}
              max={20}
              value={passwordLength}
              onChange={handleLength}
            />
          </div>
          {/* checkboxes */}
          <div className="checkboxes">
            {checkboxState.map((checkbox, index) => {
              return (
                <div key={index} className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.state}
                      onChange={() => {
                        handleCheckboxState(index);
                      }}
                    />
                    {checkbox.title}
                  </label>
                </div>
              );
            })}
          </div>
          {/* strength */}
          <div className="strength">
            <span>strength:</span>
            <span>good</span>
          </div>
          {/* error */}
          <p className="error-msg">Select at least one checkbox</p>
          {/* generate button */}
          <button className="btn generateBtn">generate password</button>
        </div>
      </div>
    </section>
  );
};
export default PasswordGenerator;
