import { useState } from 'react';
import { characterData } from '../data/characterData';
import '../styles.css';
import usePasswordGenerator from '../hooks/usePasswordGenerator';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState(characterData);
  // custom hook
  const { error, password, generatePassword } = usePasswordGenerator();
  // console.log(error, password);

  const handleLength = (e) => {
    const length = e.target.value;
    setPasswordLength(length);
  };

  const handleCheckboxData = (index) => {
    const checkboxData = [...characterData];
    checkboxData[index].state = !checkboxData[index].state;
    setCheckboxData(checkboxData);
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
          {error || (
            <header className="password">
              <p className="pwd">{password}</p>
              <button className="btn copyBtn">copy</button>
            </header>
          )}

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
            {checkboxData.map((checkbox, index) => {
              return (
                <div key={index} className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.state}
                      onChange={() => {
                        handleCheckboxData(index);
                      }}
                    />
                    {checkbox.title}
                  </label>
                </div>
              );
            })}
          </div>
          {/* strength or error*/}
          {error ? (
            <p className="error-msg">Select at least one checkbox</p>
          ) : (
            <div className="strength">
              <span>strength:</span>
              <span>good</span>
            </div>
          )}

          {/* generate button */}
          <button
            className="btn generateBtn"
            onClick={() => {
              generatePassword(passwordLength, checkboxData);
            }}
          >
            generate password
          </button>
        </div>
      </div>
    </section>
  );
};
export default PasswordGenerator;
